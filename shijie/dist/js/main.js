$(".item").eq(0).on("mouseover",function(){$(".tanchuang").eq(0).show()}),$(".item").eq(0).on("mouseout",function(){$(".tanchuang").eq(0).hide()}),$(".item").eq(1).on("mouseover",function(){$(".tanchuang").eq(1).show()}),$(".item").eq(1).on("mouseout",function(){$(".tanchuang").eq(1).hide()}),$(".item").eq(2).on("mouseover",function(){$(".tanchuang").eq(2).show()}),$(".item").eq(2).on("mouseout",function(){$(".tanchuang").eq(2).hide()}),$(".item").eq(3).on("mouseover",function(){$(".tanchuang").eq(3).show()}),$(".item").eq(3).on("mouseout",function(){$(".tanchuang").eq(3).hide()}),$(".fenge li").eq(0).on("mouseover",function(){$(".lost").eq(0).show()}),$(".fenge li").eq(0).on("mouseout",function(){$(".lost").eq(0).hide()}),$(".fenge li").eq(1).on("mouseover",function(){$(".lost").eq(1).show()}),$(".fenge li").eq(1).on("mouseout",function(){$(".lost").eq(1).hide()}),$(".fenge li").eq(2).on("mouseover",function(){$(".lost").eq(2).show()}),$(".fenge li").eq(2).on("mouseout",function(){$(".lost").eq(2).hide()}),$(".fenge li").eq(3).on("mouseover",function(){$(".lost").eq(3).show()}),$(".fenge li").eq(3).on("mouseout",function(){$(".lost").eq(3).hide()}),$(".fenge li").eq(4).on("mouseover",function(){$(".lost").eq(4).show()}),$(".fenge li").eq(4).on("mouseout",function(){$(".lost").eq(4).hide()}),$("#ditu").on("click",function(){$("#container").show(),$("#niubi").show()}),$("#ppte").on("click",function(){$("#niubi").hide()}),$.ajax({url:"/shop/json/1",type:"GET",dataType:"json",success:function(n){console.log(n.shop_data);for(var e=n.shop_data,o=0;o<5;o++){$(".dianname").eq(o).html(e[o].shop_name),$(".zhuying").eq(o).html("主营："+e[o].main),$(".dizhi").eq(o).html("地址："+e[o].addr_city+e[o].addr_area+e[o].addr_areaquan+e[o].addr_detail);var t=e[o].map_longitude,i=e[o].map_latitude,a=[];a.push("<h4 class='info_up'>"+e[o].shop_name+"</h4>"),a.push("<p class='info-center'>主营："+e[o].main+"</p>"),a.push("<p class='info-bottom'>地址："+e[o].addr+"</p>");var u=new AMap.InfoWindow({content:a.join("")}),s=new AMap.Marker({position:[t,i],map:map});s.on("click",function(n){u.open(map,n.target.getPosition())})}}});var num=0;$(".lele li").each(function(n){$(this).on("click",function(){$.ajax({url:"/shop/json/"+(n+1),type:"GET",dataType:"json",success:function(e){for(var o=e.shop_data,t=0;t<5;t++)console.log(t),console.log(o[t].shop_name),$(".dianname").eq(t).html(o[t].shop_name),$(".renzheng h3").eq(t).html(o[t].shop_id),$(".zhuying").eq(t).html("主营："+o[t].main),$(".dizhi").eq(t).html("地址："+o[t].addr_city+o[t].addr_area+o[t].addr_areaquan+o[t].addr_detail);num=n+1}})})}),$(".lost").each(function(){$(this).on("click",function(){$(this).attr("href","http://127.0.0.1:1030/html/jinrudianpu.html?page="+num+"&id="+$(this).parent().find(".renzheng h3").html())})});