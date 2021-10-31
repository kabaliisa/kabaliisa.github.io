function incrementText() {
    const text = document.getElementById("myText");
    var fontSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
    var currentSize = parseInt(fontSize);
    currentSize += 2;
    document.getElementById("myText").style.fontSize = currentSize + "pt";
    // alert("Hello, World!");
}

function changeFontHandler() {
    var checkBox = document.getElementById("bling");

    if (checkBox.checked) {
        const text = document.getElementById("myText");
        text.style.fontWeight = "bold";
        text.style.color = "green";
        text.style.textDecoration = "underline";
        // document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        document.body.style.backgroundImage = "url('images/background.jpg')";
    } else {
        const text = document.getElementById("myText");
        text.style.fontWeight = "null";
        text.style.color = "black";
        text.style.textDecoration = "none";
        document.body.style.backgroundImage = "none";
    }
}

timer = null;

function biggerTextHandler() {
    if (timer === null) {
        timer = setInterval(incrementText, 500);
    } else {
        clearInterval(timer);
        timer = null;
    }
}


function replaceWords() {
    const text = document.getElementById("myText").value;
    const words = text.split(" ");
    words.map((word, i, arr) => {
        if (word.length >= 5) {
            arr[i] = "Malcovitch";
        }
        return document.getElementById("myText").value = arr.join(" ");
    })
}