var definitons;
$(document).ready(function() {
    $('#lookupBtn').click(function() {
        var word = $('#term').val();
        $("p").remove();
        if (word !== '') {
            $.ajax({
                "url": "http://localhost:3000/",
                "type": "POST",
                "dataType": "json",
                "data": {
                    word: word,
                },
                "success": myAjaxSuccessFunction,
                "error": ajaxFailure
            });
        }
    });
});

function myAjaxSuccessFunction(data) {
    $.each(data, function(index, val) {
        let defs = val.definition;;
        $(`<p>${++index}(n.) :: ${defs}</p>`).appendTo("body");
    });
}

function ajaxFailure(json, status, exception) {
    console.log(json, status, exception);
}