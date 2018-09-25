//连接mysql数据库的模块
const mysql=require('mysql');
var pool=mysql.createPool({
     host:'127.0.0.1',
	 user:'root',
	 passeord:'',
	 database:'xz',
	 connectionLimit:15
});
//导出连接数据库
module.exports=pool;