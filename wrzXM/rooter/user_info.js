module.exports=function(app,MongoClient,crypto,url,ObjectId){
	app.get("/user_info",(req,res)=>{
		var id=req.query.id;
		MongoClient.connect(url,(err,database)=>{
			var db=database.db("User1819");
			var where={_id:ObjectId(id)};
			
			db.collection("user").find(where).toArray(function(err, result){
				console.log(result)
				res.send(JSON.stringify(result));
				
			})
			
		})
	})
	
}