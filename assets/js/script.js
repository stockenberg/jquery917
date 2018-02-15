// SELEKTION
// DOM, EVENTS, CSS,e

/*
.html();
.text();
.val();
.append();
.prepend();
.attr();
.addClass();
.removeClass();
.toggleClass();
.empty();
.remove();
.prop();
.before();
.after();


.find()
.parent()
.children()
.parents()
.parentsUntil()
.next()
.prev()

.last()
.first()

 // Slider aus JS Bilergallery
 // approach: Auslagern von Funktionen
 // Accordeon
 // Notifications
 // Scrolling Events - scrollspy plugin

*/
$(document).scroll(function () {
    if ($(this).scrollTop() >= $('.last').position().top) {
        console.log('test');
    }
});