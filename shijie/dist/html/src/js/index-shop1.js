var page = GetQueryString('page');
var ids = GetQueryString('id');


$.ajax({
	"url":"/shop/json/"+page,//ajax发送的网址请求
	"type":"GET",//请求方式
	"dataType":"json",//请求文件类型
	success:function(data){//请求成功之后返回的数据
		var shopData = data['shop_data'];
		var index = 0;
		for (var i = 0; i < shopData.length; i++) {
			if (shopData[i]['shop_id'] == ids) {
				index = i;
			}
		};
		$('.p1 img').attr('src',shopData[index]['shop_ico']);
		$('.p2 a').html(shopData[index]['shop_name']);
		$('.p2-2').html('联系人：；联系电话：'+shopData[index]['mobile']);
		$('.p2-3').html('商家地址：'+shopData[index]['addr']);
	}
})





function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
      return unescape(r[2]);
   	return null;
} 






$.ajax({
	"url":"/shop/json/4",//ajax发送的网址请求
	"type":"GET",//请求方式
	"dataType":"json",//请求文件类型
	success:function(data){//请求成功之后返回的数据
		var shopData = data['product'];
		$('.main1-2-1-3 li').each(function (index) {
			
			$('.p11 img').eq(index).attr('src',shopData[index]['product_img']);
			$('.p21 a').eq(index).html(shopData[index]['product_name']);
			$('.p2-21').eq(index).html('服务内容：'+shopData[index]['service_desc1']);
			$('.p31 p b').eq(index).html('￥ '+shopData[index]['product_price']);

		})
	}
})