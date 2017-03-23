var express = require("express");
var path = require("path");
var app = express();

app.set('port',1030);
app.use(express.static(path.join(__dirname, 'dist'))); 
var jinrudianpu = require("./routes/jinrudianpu");//寻找页面的路由
app.use("/jinrudianpu.html", jinrudianpu.jinrudianpu);//根据得到的请求匹配相对应的路由
 
var index = require("./routes/index");//寻找页面的路由
var json1 = require("./routes/json1");//寻找数据的路由
var page = require("./routes/page");
app.use("/index.html", index.index);//根据得到的请求匹配相对应的路由
app.use("/shop/json/:pageNum",page.page);



// 定制404页面
app.use(function(req, res){ 
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

//定制500页面
app.use(function(err, req, res, next){ 
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get("port"), function(){
     console.log( '刘冰666' );
});