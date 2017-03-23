	//swiper
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });




for (var i = 0; i < 18; i++) {
	var divs = $('<div></div>').css({
    	'width':'106px',
    	'height':'50px',
    	'overflow':'hidden',
    	'float':'left'
    }).appendTo('.main1-3');
    var imgs = $('<img src="../images/index3/log.png">').css({
    	'margin-top':'-50'*i+'px',
    	'cursor': 'pointer'
    }).appendTo(divs)
};

var Arr1 = ['1.jpg','2.jpg','3.jpg','4.jpg','5.png','6.jpg','7.jpg','8.jpg'];
var Arr2 = ['iPhone 6s plus','iPhone 6 plus','iPhone 6','iPhone 5s','GALAXY S7','小米M4','小米Note','奇酷手机青春版'];
var Arr3 = ['￥4666','￥4060','￥3360','￥1550','￥2510','￥460','￥980','￥420'];
for (var i = 0; i < 8; i++) {
	$('<ul><li class="main2-2-1"><img src="../images/index3/main2-2-'+Arr1[i]+'"></li><li class="main2-2-2">'+Arr2[i]+'</li><li class="main2-2-3">热收价：<span>'+Arr3[i]+'</span></li></ul>').appendTo('.main2-2');
};
