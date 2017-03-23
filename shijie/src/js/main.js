$(".item").eq(0).on("mouseover",function() {
      $(".tanchuang").eq(0).show();

	   } 
	 );
$(".item").eq(0).on("mouseout",function() {
      $(".tanchuang").eq(0).hide();

	   } 
	 );

$(".item").eq(1).on("mouseover",function() {
      $(".tanchuang").eq(1).show();

	   } 
	 );
$(".item").eq(1).on("mouseout",function() {
      $(".tanchuang").eq(1).hide();

	   } 
	 );
$(".item").eq(2).on("mouseover",function() {
      $(".tanchuang").eq(2).show();

	   } 
	 );
$(".item").eq(2).on("mouseout",function() {
      $(".tanchuang").eq(2).hide();

	   } 
	 );
$(".item").eq(3).on("mouseover",function() {
      $(".tanchuang").eq(3).show();

	   } 
	 );
$(".item").eq(3).on("mouseout",function() {
      $(".tanchuang").eq(3).hide();

	   } 
	 );
//下面是店铺进入的js
$(".fenge li").eq(0).on("mouseover",function() {
      $(".lost").eq(0).show();

	   } 
	 );
$(".fenge li").eq(0).on("mouseout",function() {
      $(".lost").eq(0).hide();

	   } 
	 );

$(".fenge li").eq(1).on("mouseover",function() {
      $(".lost").eq(1).show();

	   } 
	 );
$(".fenge li").eq(1).on("mouseout",function() {
      $(".lost").eq(1).hide();

	   } 
	 );
$(".fenge li").eq(2).on("mouseover",function() {
      $(".lost").eq(2).show();

	   } 
	 );
$(".fenge li").eq(2).on("mouseout",function() {
      $(".lost").eq(2).hide();

	   } 
	 );
$(".fenge li").eq(3).on("mouseover",function() {
      $(".lost").eq(3).show();

	   } 
	 );
$(".fenge li").eq(3).on("mouseout",function() {
      $(".lost").eq(3).hide();

	   } 
	 );
$(".fenge li").eq(4).on("mouseover",function() {
      $(".lost").eq(4).show();

	   } 
	 );
$(".fenge li").eq(4).on("mouseout",function() {
      $(".lost").eq(4).hide();

	   } 
	 );



$("#ditu").on("click",function(){
	// var div = $('<div id="container"></div>');
	// var box = $('<div class="dangcZ"></div>');
	// box.css({
	// 	"width":'100%',
	// 	'height':"100%",
	// 	'background':"gray",
	// 	"z-index":"500"
	// });
	// box.append(div);
    $("#container").show();
    $("#niubi").show();
});
$("#ppte").on("click",function(){
	$("#niubi").hide();
})


// //0、创建xhr对象，即创建一个请求
// 		var xhr = new XMLHttpRequest();
// 		//添加一个监听事件（监听服务器响应的）
// 		xhr.onreadystatechange = callBack;
// 		//1、初始化请求
// 		/*
// 		参数1、请求方式（get或post）
// 		参数2、请求路径（地址、url）
// 		参数3、是否异步，true表示异步，false表示同步
// 		 */
// 		xhr.open("get", "../data/1.json", true);
// 		//2、发送求
		
// 		如果初始化时使用的是get方式请求数据，send不需要传参数;如果初始化时使用的是post方式请求数据时。send需要传递参数(给服务器的信息)
		 
// 		xhr.send();
// 		//3、等待服务器返回数据
// 		function callBack(){
// 			if (xhr.status == 200 || xhr.status == 304) {
// 				if (xhr.readyState == 4) {
//                      var data1 = JSON.parse(xhr.responseText);
//                      var valueArr1 = data1["shop_data"];
//                      console.log(valueArr1[0]);
// 				}



// 初始化的ajax
	$.ajax({
		url:"/shop/json/1",//ajax发送的网址请求
		type:"GET",//请求方式
		dataType:"json",//请求文件类型
		success:function(data){//请求成功之后返回的数据
			 console.log(data['shop_data'])
			
        var Arr1 = data['shop_data'];


     for (var i = 0; i < 5; i++) {
		$(".dianname").eq(i).html(Arr1[i]['shop_name']);
		$(".zhuying").eq(i).html("主营："+Arr1[i]['main']);
		$(".dizhi").eq(i).html("地址："+Arr1[i]['addr_city']+Arr1[i]['addr_area']+Arr1[i]['addr_areaquan']+Arr1[i]['addr_detail']);
// 	    var marker = new AMap.Marker({
//           position: [Arr1[i]['map_longitude'], Arr1[i]['map_latitude']],//marker所在的位置
//           map:map,//创建时直接赋予map属性
//           // 'onClick' = "javascript:openInfo()"
// });
	        
          //设位置
          var jingdu = Arr1[i]["map_longitude"];
          var weidu =  Arr1[i]['map_latitude'];
          var info = [];  //这里是内容
            info.push("<h4 class='info_up'>"+Arr1[i]["shop_name"]+"</h4>")
            info.push("<p class='info-center'>主营："+Arr1[i]["main"]+"</p>");
		    info.push("<p class='info-bottom'>地址："+Arr1[i]["addr"]+"</p>");
		    // 这里是窗口的默认样式
        var infoWindow = new AMap.InfoWindow({
            content: info.join("")  //使用默认信息窗体框样式，显示信息内容
        });
          var marker = new AMap.Marker({
          	position:[jingdu,weidu],
          	map:map
          })
          marker.on("click",function(e){
               infoWindow.open(map,e.target.getPosition())
          })
       


          	
             
        //     //这里是打开的位置
        //   	   infoWindow.open(map, map.getCenter());
        //   }

	}
		
}
		});



// 	for (var i = 0; i < 3; i++) {
// 		var index1 = i;
// 		$(".lele li").eq(i).on("click",function(){
//     // 这里再次请求阿贾克斯
//        $.ajax({
// 		url:"/shop/json/"+(index1+1),//ajax发送的网址请求
// 		type:"GET",//请求方式
// 		dataType:"json",//请求文件类型
// 		success:function(data){//请求成功之后返回的数据
// 			 // console.log(data['shop_data'])
// 			// console.log(data);
// 			// console.log(1);
// 			console.log(index1);
//         var shopData = data['shop_data'];

// 			 // console.log(shopData)

//  //     for (var j = 0; j < 5; j++) {
//  //     	var index1 = j;
//  //   		$(".dianname").eq(j).html(Arr1[index1]['shop_name']);
// 	// 	$(".zhuying").eq(j).html("主营："+Arr1[index1]['main']);
// 	// 	$(".dizhi").eq(j).html("地址："+Arr1[index1]['addr_city']+Arr1[index1]['addr_area']+Arr1[index1]['addr_areaquan']+Arr1[index1]['addr_detail']);
// 	// }
		
// }
// 		});


// 		})
// 	};

var num = 0;
$(".lele li").each(function (index) {
	$(this).on('click',function () {
		$.ajax({
			url:"/shop/json/"+(index+1),//ajax发送的网址请求
			type:"GET",//请求方式
			dataType:"json",//请求文件类型
			success:function(data){//请求成功之后返回的数据
				var shopData = data['shop_data'];
				// console.log(shopData);
				// 注意 这种情况下 是不能用for来遍历的，因为这这样 不能用i  i 会被变量污染的
				//还有一点，就是比如我初始化的时候  用过了一次Arr1这个变量，下面 就不能再用了。
				//还有就是 。。。
				for (var i = 0; i < 5; i++) {
					console.log(i);
					console.log(shopData[i]['shop_name']);
					$(".dianname").eq(i).html(shopData[i]['shop_name']);
					$(".renzheng h3").eq(i).html(shopData[i]['shop_id']);
					$(".zhuying").eq(i).html("主营："+shopData[i]['main']);
					$(".dizhi").eq(i).html("地址："+shopData[i]['addr_city']+shopData[i]['addr_area']+shopData[i]['addr_areaquan']+shopData[i]['addr_detail']);
				};
				num = index+1;
			}
		})
	})
})




$('.lost').each(function  () {
	$(this).on('click',function () {
		$(this).attr('href','http://127.0.0.1:1030/html/jinrudianpu.html?page='+num+'&id='+$(this).parent().find('.renzheng h3').html())
	})
})




















//    $("#json11").on("click",function(){
//    	   $.ajax({
// 		url:"/shop/json/1",//ajax发送的网址请求
// 		type:"GET",//请求方式
// 		dataType:"json",//请求文件类型
// 		success:function(data){//请求成功之后返回的数据
// 			 console.log(data['shop_data'])
			
//         var Arr1 = data['shop_data'];


//      for (var i = 0; i < 5; i++) {
// 		$(".dianname").eq(i).html(Arr1[i]['shop_name']);
// 		$(".zhuying").eq(i).html("主营："+Arr1[i]['main']);
// 		$(".dizhi").eq(i).html("地址："+Arr1[i]['addr_city']+Arr1[i]['addr_area']+Arr1[i]['addr_areaquan']+Arr1[i]['addr_detail']);
// 	};
		
// }
// 		})
//    	   });
//    	   $("#json22").on("click",function(){
//    	   $.ajax({
// 		url:"/shop/json/2",//ajax发送的网址请求
// 		type:"GET",//请求方式
// 		dataType:"json",//请求文件类型
// 		success:function(data){//请求成功之后返回的数据
// 			 console.log(data['shop_data'])
			
//         var Arr1 = data['shop_data'];


//      for (var i = 0; i < 5; i++) {
// 		$(".dianname").eq(i).html(Arr1[i]['shop_name']);
// 		$(".zhuying").eq(i).html("主营："+Arr1[i]['main']);
// 		$(".dizhi").eq(i).html("地址："+Arr1[i]['addr_city']+Arr1[i]['addr_area']+Arr1[i]['addr_areaquan']+Arr1[i]['addr_detail']);
// 	};
		
// } 
// }) 
// 		});
  
//    	   	   $("#json33").on("click",function(){
//    	   $.ajax({
// 		url:"/shop/json/3",//ajax发送的网址请求
// 		type:"GET",//请求方式
// 		dataType:"json",//请求文件类型
// 		success:function(data){//请求成功之后返回的数据
// 			 console.log(data['shop_data'])
			
//         var Arr1 = data['shop_data'];


//      for (var i = 0; i < 5; i++) {
// 		$(".dianname").eq(i).html(Arr1[i]['shop_name']);
// 		$(".zhuying").eq(i).html("主营："+Arr1[i]['main']);
// 		$(".dizhi").eq(i).html("地址："+Arr1[i]['addr_city']+Arr1[i]['addr_area']+Arr1[i]['addr_areaquan']+Arr1[i]['addr_detail']);
// 	};
		
// }
// })
// 		});
    

