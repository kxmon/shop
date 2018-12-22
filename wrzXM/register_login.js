var mongodb=require("mongodb");
var MongoClient=mongodb.MongoClient;//客户端连接到服务器
var ObjectId=mongodb.ObjectID;//唯一标识符
var url="mongodb://localhost:27017/";//链接地址

const multer = require('multer');

var fs=require("fs");

var express=require("express");
var app=express();
const crypto = require('crypto');
app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

//请求注册时
require("./rooter/register.js")(app,MongoClient,crypto,url);
//登录loginone
require("./rooter/loginone.js")(app,MongoClient,crypto,url);
//登录logintwo 只根据用户名判断
require("./rooter/logintwo.js")(app,MongoClient,crypto,url);
//向user_list(用户列表)
require("./rooter/user_list.js")(app,MongoClient,crypto,url);
//删除数据
require("./rooter/user_del.js")(app,MongoClient,crypto,url,ObjectId);
//修改数据
require("./rooter/user_update.js")(app,MongoClient,crypto,url,ObjectId);
//从数据库拿数据 显示到修改页面的文本框
require("./rooter/user_info.js")(app,MongoClient,crypto,url,ObjectId);

//商品的添加
require("./rooter/goods_upload.js")(app, multer, fs);
require("./rooter/goods_add.js")(app, multer, fs, MongoClient, url);
//商品列表
require("./rooter/goods_list.js")(app,MongoClient,crypto,url);
//商品删除
require("./rooter/goods_del.js")(app,MongoClient,crypto,url,ObjectId);
//批量删除
require("./rooter/goods_delp.js")(app,MongoClient,crypto,url,ObjectId);
//请求商品信息 显示在修改页面
require("./rooter/goods_info.js")(app,MongoClient,crypto,url,ObjectId);
//更改商品信息
require("./rooter/goods_update.js")(app, multer, fs, MongoClient, url,ObjectId);
//购物车数据库
require("./rooter/goods_car.js")(app, multer, fs, MongoClient, url,ObjectId);
//根据用户id显示订单
require("./rooter/goods_order.js")(app, multer, fs, MongoClient, url,ObjectId);
//点击提交订单 用户购物车里的数据添加到订单系统
require("./rooter/order_system.js")(app, multer, fs, MongoClient, url,ObjectId);
//当点击提交订单，删除car的数据
require("./rooter/goods_carDel.js")(app, multer, fs, MongoClient, url,ObjectId);
//显示订单数据
require("./rooter/order_list.js")(app, multer, fs, MongoClient, url,ObjectId);
app.listen(8080);		
