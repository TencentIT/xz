const express=require("express");

const routerImageList=require("./router/imagelist");
const routerNewsList=require("./router/newslist");
const cors = require("cors");


var app=express();
app.use(cors({
	origin:["http://127.0.0.1:3001","http://localhost:3001","http://127.0.0.1:3004","http://127.0.0.1:3005","http://127.0.0.1:3006"],
	crendentials:true
}))

app.listen(3000);
app.use(express.static(__dirname+"/public"));
app.use("/imagelist",routerImageList);
app.use("/newslist",routerNewsList);

