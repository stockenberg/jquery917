/**
 * check the current url if hashtag, when load page - if not default home
 * load page after link click
 */
function loadPages() {
    var initialPageName = window.location.hash.split('#')[1];

    $('.container').load('pages/home.html');

    if(typeof initialPageName !== 'undefined'){
        $('.container').load('pages/' + initialPageName + '.html', function (responseText, textStatus, jqXHR){
            if(typeof jqXHR.status !== 'undefined' && jqXHR.status === 404){
                $('.container').load('pages/' + jqXHR.status + '.html');
            }
        });
    }


    $('.navigation a').click(function () {
        var pagename = $(this).attr('href').split('#')[1]   ;
        console.log(pagename);

        $('.container').load('pages/' + pagename + '.html', function () {
            $('title').text(pagename);
        });
    });

}

$(document).ready(function () {

    loadPages();

});