$(document).ready(function () {
    $.getJSON('assets/json/data.json')
        .done(function (result) {
            console.log(result);
        });

});