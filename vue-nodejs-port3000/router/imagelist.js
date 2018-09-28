const express=require("express");
const pool=require("../pool");
const router=express.Router();

//get post delete put head options trace connect
router.get("/list",(req,res)=>{
    var sql="SELECT id,img_url,title FROM xz_imagelist";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        // res.writeHead({
        // 	'Access-Control-Allow-Origin':"*"
        // })
        // res.end();
        res.send({code:1,msg:result});
    })
})
module.exports=router;