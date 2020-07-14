$(document).ready(function(){

    // let forModal = [];
    // forModal.push($('ul').find('li:eq(1)'));
    // forModal.push($('.main_btn'));
    // forModal.push($('.main_btna'));

    function setModal() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    }

    function deleteModal() {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
    }

    $('ul a[href = "#sheldure"], .main_btn, .main_btna').click(setModal);
    $('.close').click(deleteModal);

});