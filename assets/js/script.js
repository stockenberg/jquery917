// 1. Get all imgs save it to array
    // b. get the number of total imgs
    // get number of actual img

/*
    IMG Count
    Next Button
    Prev Button
    Actual URL - after click
    reference between img number and img in array
 */

var galleryItems = document.getElementById('gallery').children[0].children;

/**
 * Generate Pagination
 */
function generatePagination () {

    $('.counter').empty()

    $(galleryItems).map(function (index) {
        var actualImgCount = index + 1;
        $(galleryItems[index]).find('img').attr('data-index', index);
        console.log(index + 1);
        console.log(this);
        $('.counter').append('<a href="#" data-index="'+index+'"> ' + actualImgCount + '</a>');
    });

    // Todo : next + prev buttons

    /*
    for(var i = 0; i < galleryItems.length; i++){
        console.log(i);
        console.log(galleryItems[i]);
    }
    */

}

$(document).ready(function () {

    generatePagination();

    /**
     * click on pagination-link - to get img at index n
     */
    $('.counter a').click(function (){
        console.log(galleryItems[this.dataset.index]);
    } );

    $('#gallery figure img').click(function () {
        console.log(this.src);
        var src = this.src;

        $('#lightbox').fadeIn(500);
        $('#lightbox figure img').attr('src', src);

        $('.counter')
            .find('a[data-index=' + this.dataset.index + ']')
            .css('color', 'red');

    });
});
