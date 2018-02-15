function notify(text, color) {
    // Todo : text color problem with light colors
    $('ul.notifications').append('<li style="background: ' + color + '">' + text + '</li>').hide().fadeIn(500);

    setTimeout(function () {
        $('ul.notifications li:first-child').remove();
    }, 3000);
}


notify('Klappt das ? ', '#2365f1');