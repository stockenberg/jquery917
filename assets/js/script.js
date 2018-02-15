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
        $('.counter').append('<a href="#" data-index="'+index+'"> &bullet; </a>');
    });
    // TODO : Next and Previous Buttons
}

function resetPaginationColor() {
    $('.counter a').each(function () {
        $(this).css('color', 'white');
    })
}

$(document).ready(function () {

    generatePagination();

    /**
     * click on pagination-link - to get img at index n
     */
    $('.counter a').click(function (){
        console.log(galleryItems[this.dataset.index]);
    } );

    $('button.close').click(function () {
        $('#lightbox').fadeOut(500);
    });

    $('#gallery figure img').click(function () {
        console.log(this.src);
        var src = this.src;

        $('#lightbox').fadeIn(500);
        $('#lightbox figure img').attr('src', src);

        // Set Actual Number to Active
        // TODO : reset Color of bullets
        resetPaginationColor();
        $('.counter')
            .find('a[data-index=' + this.dataset.index + ']')
            .css('color', 'red');

    });

    $('nav.counter a').click(function () {
        var src = $(galleryItems[this.dataset.index]).find('img').attr('src');
        resetPaginationColor();
        $(this).css('color', 'red');
        $('#lightbox figure img').attr('src', src);
    })
});
