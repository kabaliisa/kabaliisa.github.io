$(document).ready(function() {
    let gameIsStarted = false;
    let empty;
    let closeTile = [];

    let initialPostions = [
        { left: 0, top: 0 },
        { left: 100, top: 0 },
        { left: 200, top: 0 },
        { left: 300, top: 0 },
        { left: 0, top: 100 },
        { left: 100, top: 100 },
        { left: 200, top: 100 },
        { left: 300, top: 100 },
        { left: 0, top: 200 },
        { left: 100, top: 200 },
        { left: 200, top: 200 },
        { left: 300, top: 200 },
        { left: 0, top: 300 },
        { left: 100, top: 300 },
        { left: 200, top: 300 },
        { left: 300, top: 300 }
    ]

    Object.prototype.clone = function() {
        let myObj = (this instanceof Array) ? [] : {};
        for (i in this) {
            if (i == 'clone') continue;
            if (this[i] && typeof this[i] == "object") {
                myObj[i] = this[i].clone();
            } else myObj[i] = this[i]
        }
        return myObj;
    };
    //Intialize game
    (function initializeGame() {
        setDefaultBackground(false);
    })();

    function setDefaultBackground(isShuffle) {
        $('#puzzlearea div').each(function(i, value) {
            // calculate x and y for this piece
            let x = ((i % 4) * 100);
            let y = (Math.floor(i / 4) * 100);
            $(value).addClass("puzzlepiece");
            $(value).css("left", x + 'px');
            $(value).css("top", y + 'px');
            if (!isShuffle) {
                $(value).css("background-image", 'url("background.jpg")');
                $(value).css("background-position", -x + 'px ' + (-y) + 'px');
            }

            // store x and y for later
            value.x = x;
            value.y = y;
        });

    }


    $("#shufflebutton").click(function() {
        gameIsStarted = true;
        findCloseTiles();
        shuffle();
    });

    function findEmptyTile() {
        let helperArr = initialPostions.clone();
        $('.puzzlepiece').each(function() {
            let position = getPositionByElem($(this));
            helperArr = removeElementFromArray(helperArr, position);
        });

        return helperArr[0];
    }

    function removeElementFromArray(arr, position) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].left == position.left && arr[i].top == position.top)
                arr.splice(i, 1);
        }
        return arr;
    }

    function findCloseTiles() {
        empty = findEmptyTile();

        closeTile = [];

        let arrReferences = [
            { left: empty.left - 100, top: empty.top },
            { left: empty.left + 100, top: empty.top },
            { left: empty.left, top: empty.top - 100 },
            { left: empty.left, top: empty.top + 100 }
        ]

        arrReferences.forEach(function(v, i) {
            if (v.left >= 0 && v.left <= 300 && v.top >= 0 && v.top <= 300)
                closeTile.push(v);
        });

        addHtmlElementTocloseTile();
    }

    function addHtmlElementTocloseTile() {
        let puzzleArea = document.getElementById('puzzlearea');
        let divs = puzzleArea.getElementsByTagName("div");

        $(divs).each(function(i, e) {
            let elem = $(this);
            let position = getPositionByElem(elem);

            closeTile.forEach(function(v, i) {
                if (v.top == position.top && v.left == position.left)
                    v.element = elem;
            });
        });
    }

    $(".puzzlepiece").click(function() {
        if (gameIsStarted) {
            position = getPositionByElem($(this));
            let element = searchIfElementExists(closeTile, position)
            if (element != null)
                setempty(element);
        }
    });

    function shuffle() {
        for (let i = 0; i < 100; i++) {
            var closeElem = closeTile[Math.floor(Math.random() * closeTile.length)];
            setempty(closeElem.element);
        }
    }

    function setempty(element) {
        let style = element.attr("style");
        let arrStyle = style.split(";");
        arrStyle.splice(0, 1, "left: " + empty.left + "px");
        arrStyle.splice(1, 1, "top:" + empty.top + "px");
        element.attr("style", arrStyle.join(";"));
        findCloseTiles();
    }

    function getPositionByElem(elem) {
        let arr = elem.attr("style").split(';');
        let leftPosition = parseInt(arr[0].split(':')[1]);
        let topPosition = parseInt(arr[1].split(':')[1]);
        let position = { left: leftPosition, top: topPosition };
        return position;
    }

    function searchIfElementExists(arr, position) {

        var element = null;
        arr.forEach((v, i) => {
            if (v.left == position.left && v.top == position.top)
                element = v.element;
        });

        return element;
    }

    $(".puzzlepiece").hover(
        function() {
            if (gameIsStarted) {
                position = getPositionByElem($(this));
                let element = searchIfElementExists(closeTile, position);
                if (element != null)
                    $(element).addClass('movablepiece');
            }
        },
        function() {
            if (gameIsStarted) {
                $(this).removeClass('movablepiece');
            }
        });
});