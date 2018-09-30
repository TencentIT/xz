//图片轮播
//1:引入模块 pool express
const pool = require("../pool");
const express = require("express");
//2:创建路由对象
var router = express.Router();
//功能一:发送商品列表给前端
router.get("/list",(req,res)=>{
    var obj = [
{id:1,img_url:"http://127.0.0.1:3000/banner1.png",title:"魅族6",
		p_old:"3000.00",p_now:"2100.00",sell:1},
{id:2,img_url:"http://127.0.0.1:3000/banner2.png",title:"360 N7",
		p_old:"1100.00",p_now:"333.00",sell:1},
{id:3,img_url:"http://127.0.0.1:3000/banner1.png",title:"魅族6",
		p_old:"3000.00",p_now:"2100.00",sell:1},
{id:4,img_url:"http://127.0.0.1:3000/banner2.png",title:"360 N7",
		p_old:"1100.00",p_now:"333.00",sell:1},
{id:5,img_url:"http://127.0.0.1:3000/banner1.png",title:"魅族6",
		p_old:"3000.00",p_now:"2100.00",sell:1},
{id:6,img_url:"http://127.0.0.1:3000/banner2.png",title:"360 N7",
		p_old:"1100.00",p_now:"333.00",sell:1},
{id:7,img_url:"http://127.0.0.1:3000/banner1.png",title:"魅族6",
		p_old:"3000.00",p_now:"2100.00",sell:1},
{id:8,img_url:"http://127.0.0.1:3000/banner2.png",title:"360 N7",
		p_old:"1100.00",p_now:"333.00",sell:1},
	];
	res.send({code:1,msg:obj})
});

router.get("/find",(req,res)=>{
  var obj={id:"9",title:"小辣椒 10",p_old:2199,p_now:2099,p_sn:"2199282",p_type:"青春款"}
  res.send(obj);
})



//4:导出当前路由模块
module.exports = router;