$(function  () {
	var num = 0;
	var mapArr1=[];
	var mapArr2=[];
	$('.headerWidth ul li').eq(1).on('click',function () {
		event.stopPropagation();
		$('.city').fadeToggle();
	})
	//swiper
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    $('.nav li').each(function (index) {
    	$(this).on('mouseover',function () {
    		$('.navContent-1').css('top',index*85).slideDown();
    	})
    	$(this).on('mouseout',function () {
    		$('.navContent-1').css('top',index*85).hide();
    	})
    });
    $('.navContent-1').on('mouseover',function () {
		$(this).show();
	})
	$('.navContent-1').on('mouseout',function () {
		$(this).hide();
	})
   	$.ajax({
		"url":"/shop/json/1",//ajax发送的网址请求
		"type":"GET",//请求方式
		"dataType":"json",//请求文件类型
		success:function(data){//请求成功之后返回的数据
			var shopData = data['shop_data'];
			$('.main31-left-3 li').each(function (index) {
				$('.main31-left-3 li img').eq(index).attr('src',shopData[index]['shop_ico']);
				$('.main31-left-3 li .p2 a').eq(index).html(shopData[index]['shop_name']);
				$('.main31-left-3 li .p2 span').eq(index).html('店铺等级：');
				$('.main31-left-3 li .p2 .p2-2').eq(index).html('主营：'+shopData[index]['shop_desc']);
				$('.main31-left-3 li .p2 .p2-3').eq(index).html('地址：'+shopData[index]['addr']);
				$('.main31-left-3 li .p3 p').eq(index).html('人气：'+shopData[index]['shop_visit']+'次浏览');
				$('.main31-left-3 li .p3 h3').eq(index).html(shopData[index]['shop_id']);
				mapArr1.push(shopData[index]['map_latitude']);
				mapArr2.push(shopData[index]['map_longitude']);
			})
			$('.main31-right ul li').each(function (index) {
				$('.p211 img').eq(index).attr('src',shopData[index]['shop_ico']);
				$('.p311-1').eq(index).html(shopData[index]['shop_name']);
			})
		}
	})
aaaa();
	$('.before').each(function (index) {
		$(this).on('click',function () {
			mapArr1=[];
			mapArr2=[];
			$('.before').css({
				'background':'white',
				'color':'black'
			});
			num = index;
			$(this).css({
				'background':'#ffcc00',
				'color':'white'
			});
			$.ajax({
				url:"/shop/json/"+(num+1),//ajax发送的网址请求
				type:"GET",//请求方式
				dataType:"json",//请求文件类型
				success:function(data){//请求成功之后返回的数据
					var shopData = data['shop_data'];
					for (var i = 0; i < 5; i++) {
						var index1 = i;
						$('.main31-left-3 li img').eq(i).attr('src',shopData[index1]['shop_ico']);
						$('.main31-left-3 li .p2 a').eq(i).html(shopData[index1]['shop_name']);
						$('.main31-left-3 li .p2 span').eq(i).html('店铺等级：');
						$('.main31-left-3 li .p2 .p2-2').eq(i).html('主营：'+shopData[index1]['shop_desc']);
						$('.main31-left-3 li .p2 .p2-3').eq(i).html('地址：'+shopData[index1]['addr']);
						$('.main31-left-3 li .p3 p').eq(i).html('人气：'+shopData[index1]['shop_visit']+'次浏览');
						$('.main31-left-3 li .p3 h3').eq(i).html(shopData[index1]['shop_id']);
						mapArr1.push(shopData[index1]['map_latitude']);
						mapArr2.push(shopData[index1]['map_longitude']);
					};		
						aaaa()
				}
			})
		})
	})

var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:11,
    center: [116.397428, 39.90923]
});

AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
    function(){
        map.addControl(new AMap.ToolBar());

        map.addControl(new AMap.Scale());

        map.addControl(new AMap.OverView({isOpen:true}));
});
function  aaaa() {
	// body...

console.log(mapArr1);
	for (var i = 0; i < 5; i++) {
		marker = new AMap.Marker({
			position: [mapArr2[i], mapArr1[i]]
		});
		marker.setMap(map);
	};
}



$('.main31-left-4').clone(true).appendTo('.mapDiv');






$('.mapBtn').on('click',function () {
	$('.mapDiv').show();
})
$('.close').on('click',function () {
	$('.mapDiv').hide();
	
})


$('.getA').each(function () {
	$(this).on('click',function () {
		console.log($(this).parent().parent().find('.p3 h3').html())
		$(this).attr('href','index-shop1.html?page='+(num+1)+'&id='+$(this).parent().parent().find('.p3 h3').html());
	})
})
$('.main31-left-3 .p4 a').hide();
$('.main31-left-3 .p4').parent().on('mouseover',function  () {
	$(this).find('a').show();
})
$('.main31-left-3 .p4').parent().on('mouseout',function  () {
	$(this).find('a').hide();
})


















    

    



})