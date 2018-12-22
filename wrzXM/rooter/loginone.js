module.exports=function(app,MongoClient,crypto,url){
	app.get("/loginone",(req,res)=>{
	res.writeHead(200,{
        'Access-Control-Allow-Origin':'*'
        });
    var uname=req.query.uname.replace(/[<>'"]/);
    var upwd = crypto.createHmac('sha256', 'abc').update(req.query.upwd).digest('hex');
    MongoClient.connect(url,(err,database)=>{
    	var db=database.db("User1819");
    	//判断密码和用户名是否正确
    	console.log(uname,upwd);
    	
    	var where={"uname":uname,"upwd":upwd}
    	db.collection("user").find(where).toArray( function(err, result){
			if (result.length ==1) {
				var sendObj={
					"uid":result[0]._id,
					"uname":result[0].uname
				}
				//设置一个时间 记录登陆的时间
				var time=new Date().toLocaleString();
				//把登录时间更新
				var updateObj={$set:{"uname":uname,"upwd":upwd,"time":time}}
				db.collection("user").updateOne(where,updateObj,(err,result)=>{
					res.end( JSON.stringify(sendObj));
				})
				//用户登录成功
				
			}else if(result.length==0){
				//用户登录失败
				res.end("0");
				
			}
		});	
    	
    })
    
})
}