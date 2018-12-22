module.exports=function(app,MongoClient,crypto,url){
	app.get("/logintwo",(req,res)=>{
	res.writeHead(200,{
        'Access-Control-Allow-Origin':'*'
        });
    var uname=req.query.uname.replace(/[<>'"]/);
    
    MongoClient.connect(url,(err,database)=>{
    	var db=database.db("User1819");
    	//判断密码和用户名是否正确
    	console.log(uname);
    	var where={"uname":uname}
    	db.collection("user").find(where).toArray( function(err, result){
			if (result.length ==1) {
				var sendObj={
					"uid":result[0]._id,
					"uname":result[0].uname
				}
				//设置一个时间 记录登陆的时间
				var time=new Date().toLocaleString();
				//用户登录成功
				res.end( JSON.stringify(sendObj));
			}else if(result.length==0){
				//用户登录失败
				res.end("0");
				
			}
		});	
    	
    })
    
})
}