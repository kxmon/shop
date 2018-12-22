module.exports=function(app,MongoClient,crypto,url){
	app.get("/register",(req,res)=>{
	res.writeHead(200,{
        'Access-Control-Allow-Origin':'*'
        });
    var uname=req.query.uname.replace(/[<>'"]/);
    var upwd = crypto.createHmac('sha256', 'abc').update(req.query.upwd).digest('hex');
    MongoClient.connect(url,(err,database)=>{
    	var db=database.db("User1819");
    	//创建表格
    	db.createCollection("user",(err,result)=>{
    		
    	})
    	//现在数据库中查找用户名是否存在
    	db.collection("user").find({"uname":uname}).toArray( function(err, result){
			if (result.length !=0) {
				//用户名已存在
				res.end("1");
			}else{
				var time=new Date().toLocaleString();
				var myobj={"uname":uname,"upwd":upwd,"time":time};
				db.collection("user").insertOne(myobj,(err,result)=>{
					res.end("0");
					console.log(result);
				})
			}
		});	
    	
    })
    
})
}
