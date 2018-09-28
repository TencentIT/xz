const express=require("express");
const pool=require("../pool");
const router=express.Router();

router.get("/list",(req,res)=>{
    var pno=req.query.pno;            //当前页码
    var pageSize=req.query.pageSize;  //页大小

    if(!pno){
        pno=1;
    }
    if(!pageSize){
        pageSize=10;
    }
    var reg=/^[0-9]{1,}$/;
    if(!reg.test(pno)){
        res.send({code:-1,msg:"页码格式不正确"});
        return;
    }
    if(!reg.test(pageSize)){
        res.send({code:-2,msg:"页大小格式不正确"});
        return;
    }
    var obj = {pno:pno,pageSize:pageSize};
    var progress= 0;

    var sql="SELECT  count(id) as c FROM xz_news";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(1,result);
        // console.log(11,result[0].c);
        var pageCount = Math.ceil(result[0].c/pageSize);
        obj.pageCount = pageCount;

        progress+=50;
        if(progress==100){
            res.send(obj);
        }
    });

    var sql=" SELECT * ";
    sql+=" FROM xz_news";
    sql+=" LIMIT ?,?";
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        // console.log(2,result);
        progress+=50;
        if(progress==100){
            obj.data = result;
            // console.log(obj);
            res.send(obj);
        }
    });

});

//依据用户id查找新闻详细信息
router.get("/find",(req,res)=>{

    var id = req.query.id;
    // if(!id){
        
    // }
    var sql = " SELECT `id`, `title`, `content`,"
        sql +="  `click`, `img_url`, `price`,  "
        sql+= " `ctime` FROM `xz_news` WHERE id=?";

    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send({code:1,msg:result});
    })
})
//http://localhost:3000/newslist/find?id=1

module.exports=router;