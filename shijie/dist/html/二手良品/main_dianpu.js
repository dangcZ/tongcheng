


$.ajax({
		url:"/shop/json/4",//ajax发送的网址请求
		type:"GET",//请求方式
		dataType:"json",//请求文件类型
		success:function(data){//请求成功之后返回的数据
			 
			
        var Arr1 = data['product'];
        console.log(Arr1[0]);


        

     for (var i = 0; i < 10; i++) {
		$(".mingzi").eq(i).html(Arr1[i]['product_name']);
		$(".neirong").eq(i).html(Arr1[i]['service_desc1']);
		$(".tuzi img").eq(i).attr("src",Arr1[i]['product_img']);
		$(".biti").eq(i).html("￥"+Arr1[i]['product_price'])
        
}       
}
		});
$.ajax({
		url:"/shop/json/1",//ajax发送的网址请求
		type:"GET",//请求方式
		dataType:"json",//请求文件类型
		success:function(data2){//请求成功之后返回的数据
			 console.log(data2['shop_data'])
			
        var Arr2 = data2['shop_data'];


    
		$(".dianname").html(Arr2[0]['shop_name']);
		$(".zhuying").html("主营："+Arr2[0]['main']);
		$(".dizhi").html("地址："+Arr2[0]['addr_detail']);
		$(".dianpulogo2 img").attr("src",Arr2[0]['shop_ico']);
	
}
});