#db:sql数据库脚本文件
#1.创建库  web1806
#2.进入
#3.创建用户名 xz_user
CREATE DATABASE web1806 charset=utf8; 
USE web1806;
CREATE TABLE xz_user(
    uid  INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    upwd  VARCHAR(32)
);
INSERT INTO xz_user VALUES(null,'tom',md5('123456'));
INSERT INTO xz_user VALUES(null,'dongdong',md5('123456'));
INSERT INTO xz_user VALUES(null,'jerry',md5('123456'));
#功能一：登录
#SELECT * FROM xz_user WHERE uname='tom' AND upwd=md5('123456');
#建议
SELECT COUNT(uid) AS c FROM xz_user WHERE uname='tom' AND upwd=md5('123456');


#图片轮播表
CREATE TABLE xz_imagelist(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title  VARCHAR(50)
);
INSERT INTO xz_imagelist VALUES(null,'http://127.0.0.1:3000/img/banner1.png','图片1');
INSERT INTO xz_imagelist VALUES(null,'http://127.0.0.1:3000/img/banner2.png','图片2');
INSERT INTO xz_imagelist VALUES(null,'http://127.0.0.1:3000/img/banner3.png','图片3');
INSERT INTO xz_imagelist VALUES(null,'http://127.0.0.1:3000/img/banner4.png','图片4');
#查询图片轮播图所有数据
SELECT id,img_url,title FROM xz_imagelist;

#新闻表
CREATE TABLE xz_news(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    title    VARCHAR(255),
    content  VARCHAR(2000),
    click    INT,
    img_url  VARCHAR(255),
    price    DECIMAL(10,2),
    ctime    DATETIME
);
INSERT INTO xz_news VALUES(null,'11','1111',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'22','2222',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(null,'33','3222',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(null,'44','4444',0,'http://127.0.0.1:3000/banner4.png',0,now());
INSERT INTO xz_news VALUES(null,'55','5555',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'66','6666',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(null,'77','7777',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(null,'88','8888',0,'http://127.0.0.1:3000/banner4.png',0,now());
INSERT INTO xz_news VALUES(null,'99','9999',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'100','10000',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(null,'101','101101',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(null,'102','102102',0,'http://127.0.0.1:3000/banner4.png',0,now());
INSERT INTO xz_news VALUES(null,'103','103103',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'104','104104',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(null,'105','105105',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(null,'106','106106',0,'http://127.0.0.1:3000/banner4.png',0,now());
INSERT INTO xz_news VALUES(null,'107','107107',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'108','108108',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(null,'109','109109',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(null,'110','110110',0,'http://127.0.0.1:3000/banner4.png',0,now());