	
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        autoplay: 1000,
        effect: 'fade'
    });
    for (var i = 0; i < 5; i++) {
    	$('.footer-1-1 img').eq(i).css('margin-top','-43'*i+'px')
    };
    $('.main1-1-1').each(function (index) {
    	$(this).on('mouseover',function () {
    		$('.main1-2 ul').hide();
    		$('.main1-2 ul').eq(index).show();
    	})
    })