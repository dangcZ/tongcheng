//点击nav右侧a
var num = 0;
$("#quan a").each(function(index,value){
	$("#quan a").eq(index).click(function(e){
		var ev = window.event || e;
		ev.preventDefault();
		$("#quan a").eq(num).css({
			background:"white",
			color:"black"
		});
		num = index;
		$(this).css("background","green").css("color","white"); 
	})
})


var url = window.location.href;
var ye = url.slice(url.indexOf("=")+1,url.indexOf("&"));
var ji = url.slice(url.lastIndexOf("=")+1);
var big = document.querySelector(".dade");
var small = document.querySelectorAll(".small");
$.ajax({
	url: '/a/json/'+ye,
	type: 'GET',
	datatype: 'json',
	success: function(data){
	    var gr = JSON.parse(data).shop_data;
	    var obj = gr[ji];
	    console.log(obj);
	    $(".hind span").html(obj.shop_name);
	    big.src = obj.shop_ico;
	    $(".shop_name h4").html(obj.shop_name);
	    $(".shop_name p").html(obj.addr+"(<a href=''>查看地图</a>)");
	    $(".main").html(obj.main);
	    $(".fixed_phone").html(obj.fixed_phone);
	    $("#weixiu dl").each(function(index,value){
	    	$(".shName").eq(index).html(gr[index+5].shop_name);
	    	$("dian dt span").eq(index).html(gr[index+5].addr);
	    	$(".score").eq(index).html(gr[index+5].score);
	    	small[index].src = gr[index+5].shop_ico;

	    })
	}

})

