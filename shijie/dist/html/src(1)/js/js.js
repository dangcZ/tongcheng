//轮播
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
		loop:true,
		pagination : '.swiper-pagination',
		paginationClickable :true,
		autoplayDisableOnInteraction:false,
	})
	//点击"切换城市"事件
	$("#qiehuan").click(function(e){
		var ev = window.event || e;
		ev.stopPropagation();
		$("#cheng").fadeIn(100);
	})
	//点击关闭按钮事件
	$("#cheng input").click(function(e){
		var ev = window.event || e;
		ev.stopPropagation();
		$("#cheng").fadeOut(100);
	})
	//点击主屏幕事件
	$(document).click(function(){
		$("#cheng").fadeOut(100);
	})
	//点击城市界面
	$("#cheng").click(function(e){
		var ev = window.event || e;
		ev.stopPropagation();
		$("#cheng").fadeIn(100);
	})
	//维修店铺数据
	var biao = document.querySelectorAll(".biao");
	
	lala(1);
	//点击页数
	var ye = 0;
	var a = 0;
	$(".yeshu").each(function(index,value){
		$(".yeshu").eq(index).click(function(){
			$(".yeshu").eq(a).css("background","white");
			a = index;
			$(".yeshu").eq(a).css("background","orange");
			ye = index;
			lala(ye+1);
		})
	})
	//点击下一页
	$("#key").click(function(){
		$(".yeshu").eq(a).css("background","white");
		a++;
		$(".yeshu").eq(a).css("background","orange");
		ye++;
		lala(ye+1);
	})

	function lala(num){
		$.ajax({
	    	url: '/a/json/' + num,
	    	type: 'GET',
	    	datatype: 'json',
	    	success: function(data){
	    		var obj = JSON.parse(data).shop_data;
	    		console.log(obj);
				

				//初始化地图对象，加载地图
			    var map = new AMap.Map("container", {
			    	resizeEnable: true,
			    	zoom:11,
			    	center:[obj[0].map_longitude,obj[0].map_latitude]
			    });
			    var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
			    function markerClick(e) {
			        infoWindow.setContent(e.target.content);
			        infoWindow.open(map, e.target.getPosition());
			    }
			    map.setFitView();
	    		



	    		$(".left dl").each(function(index,value){


	    			var marker = new AMap.Marker({
			            position: [obj[index].map_longitude,obj[index].map_latitude],
			            map: map
			        });
			        marker.content = '<h5>' + obj[index].shop_name + '</h5>';
			        marker.content += '<div class="nei">主营：'+ obj[index].main +'</div>';
			        marker.content += '<div>地址：'+ obj[index].addr +'</div>';
			        marker.content += '<a href="index1.html?a=' + num + '&b=' + index +'" style="margin-top: 5px; font-size: 12px; color: green;">进入店铺》</a>';
			        marker.on('click', markerClick);
			        marker.emit('click', {target: marker});

	    			//店铺图片
	    			biao[index].src = obj[index].shop_ico;
	    			//店铺名字
	    			$(".name").eq(index).html(obj[index].shop_name);
	    			//店铺主营
	    			$(".zhuying").eq(index).html(obj[index].main);
	    			//店铺地址
	    			$(".dizhi").eq(index).html(obj[index].addr);
	    			//店铺人气
	    			$(".left dl div span").eq(index).html("人气：" + obj[index].shop_visit + "次浏览");
	    			//点击查看店铺
	    			$(".left .tiao").eq(index).attr("href","index1.html?a=" + num + "&b="+index);
	    			//店铺等级
	    			$(".level").eq(index).html(function(){
	    				var level = parseInt(obj[index].level/3);
	    				var html = "";
	    				for(var i = 0; i < level; i++){
	    					//店铺星级
	    					var span = "<span class='shi'></span>"
	    					html += span;
	    				}
	    				return html;
	    			})
	    			//鼠标滑过店铺信息，背景色改变，查看店铺div出现
	    			$(".left dl").eq(index).mouseover(function(){
	    				$(this).css("background","#eef");
	    				$(this).find(".tiao").css("display","inline-block");
	    			})
	    			//鼠标离开店铺信息，背景色改变，查看店铺div隐藏
	    			$(".left dl").eq(index).mouseout(function(){
	    				$(this).css("background","white");
	    				$(this).find(".tiao").css("display","none");
	    			})
	    		})
	    	}
	    })
	}

	//点击地图模式，地图出现
	$("#shun span").click(function(){
		$(".mengban").css("display","block");
		var cccc = a;
		$(".fyq").each(function(index,value){
			$(".fyq").eq(cccc).css("background","orange").css("color","white");
			$(".fyq").eq(index).click(function(){
				// console.log(index)
				$(".fyq").eq(cccc).css("background","white").css("color","black");
				cccc = index;
				$(".fyq").eq(cccc).css("background","orange").css("color","white");
				lala(cccc+1);
			})
			$(".next").click(function(){
				$(".fyq").eq(cccc).css("background","white").css("color","black   ");
				cccc++;
				$(".fyq").eq(cccc).css("background","orange").css("color","white");
				lala(cccc+1);
			})
		})

	})
	//点击地图关闭按钮
	$(".map_wrap p span").click(function(e){
		var ev = window.event || e;
		ev.stopPropagation();
		$(".mengban").css("display","none");
	})

	