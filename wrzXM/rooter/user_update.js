module.exports=function(app,MongoClient,crypto,url,ObjectId){
	app.get("/user_update", function(req, res){
		var id = req.query.id;
		var username = req.query.username;
		var password = req.query.password;
		
		MongoClient.connect(url, (err, database)=>{
			var db = database.db("User1819");			
			
			var whereObj = {_id:ObjectId(id)};
			var pwd = crypto.createHmac('sha256', 'abc').update(password).digest('hex');
			
			var updateObj = {$set:{
				"uname":username,
				"upwd":pwd,
			}};
			
			db.collection("user").updateOne(whereObj, updateObj, (err, result)=>{
				console.log(result)
				res.send("修改成功");
			});
			
								
		});
	})
	
}