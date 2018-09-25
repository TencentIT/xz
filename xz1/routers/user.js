//用户路由器
const express=require('express');
const pool=require('../pool.js');//导入连接数据库模块
//使用路由器
//1.用户注册
var router=express.Router();
//请求方法为post，请求url为add
router.post('/add',(req,res)=>{   //get :req:query   post:req.body
	var obj=req.body;
	//对客户端所传递的数据进行验证
	var $uname=obj.uname;
	if(!$uname){ //等价于：$uname ==''
	   res.send({code:401,msg:'uname required'});
	   //禁止程序继续执行
	   return;
	}
	//对密码验证，邮箱，手机进行验证
	var $upwd=obj.upwd;
	if(!$upwd){
	  res.send({code:402,msg:'upwd require'});
	    return;
	}
	var $email=obj.email;
	if(!$email){
	    res.send({code:403,msg:'email require'});
	   return;
	}
	var $phone=obj.phone;
	if(!$phone){
	   res.send({code:404,msg:'phone require'});
	   return;
	}
	//把数据插入到数据库中
	var sql='INSERT INTO xz_user VALUES(NULL,?,?,?,?,NULL,NULL,NULL)';
	pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
	   if(err) throw err;
	   //提示注册成功
	 res.send({code:200,msg:'success'});

	 // res.sendFile(__dirname+'');
	});
});
//2.用户登录
router.post('/login',(req,res)=>{
   var obj=req.body;
   //验证用户名和密码
   var $uname=obj.uname;
   if(!$uname){
      res.send({code:401,msg:'uname required'});
	  return;
   }
   var $upwd=obj.upwd;
   if(!$upwd){
      res.send({code:402,msg:'upwd required'});
	  return;
   }
   //查询数据库中是否含有这条记录
   //同时满足用户名为$uname和密码$upwd
   var sql='SELECT * FROM xz_user WHERE uname=? AND upwd=?';
   pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err)  throw err;
		//result 返回结果是数组
		//如果数组长度大于0，说明找到满足条件的记录
		//否则数组的长度等于0，说明没有找到满足条件的记录
		//console.log(result);
		if(result.length>0){
		  //res.send('您好，欢迎'+$uname);
		  res.send({code:200,msg:'login success'});
		}else{
		   res.send({code:301,msg:'uname or upwd err'});
		}
   });
   
});
//3.删除用户
//get :req:query   post:req.body
router.get('/delete',(req,res)=>{
   var obj=req.query;
  //console.log(obj);
   var $uid=obj.uid;
   if(!$uid){ //验证是否为空
       res.send({code:401,msg:'uid required'});
	   return;
   }
      var sql='DELETE FROM xz_user WHERE uid=?';
	  pool.query(sql,[$uid],(err,result)=>{
	      if(err)  throw err;
		  console.log(result);
		  //判断是否删除成功
		  if(result.affectedRows>0){
		   res.send({code:200,msg:'delete success'});  
		  }else{
		  res.send({code:301,msg:'delete err'});}
	  });
  
});
//检索用户
router.get('/query',(req,res)=>{
         var obj=req.query;
		//console.log(obj);
		var str=obj.query;
		console.log(typeof(str));
		if(!str){
		 res.send({code:401,msg:'query required'});
		}
		var sql1='SELECT * FROM xz_user WHERE uid=? ';
		var sql2='SELECT * FROM xz_user WHERE uname=?';
		if(parseInt(str)){
		pool.query(sql1,[str],(err,result)=>{
		    if(err)  throw err;
			console.log(result);
			res.send({code:200,msg:"query sucess"});
		})}else{
		  pool.query(sql2,[str],(err,result)=>{
		     if(err)  throw err;
			 console.log(result);
			 res.send({code:200,msg:"query sucess"});
		   });
		}
});
//导出路由器
module.exports=router;