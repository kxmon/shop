module.exports=function(app,MongoClient,crypto,url,ObjectId){
	app.get("/user_del",(req,res)=>{
		var id=req.query.id;
		MongoClient.connect(url,(err,database)=>{
			var db=database.db("User1819");
			var where={_id:ObjectId(id)}
			db.collection("user").deleteOne(where,(err,result)=>{
				res.send("删除成功");
			})
		})
	});
	
	
	app.post("/user_del",(req,res)=>{
		var ids=req.body.ids;
		var arr=ids.split(",");
		var arr2=arr.map(function(id){
			return ObjectId(id);
		})
		
		MongoClient.connect(url,(err,database)=>{
			var db=database.db("User1819");
			
			var where={_id:{$in:arr2}};
			db.collection("user").deleteMany(where,(err,result)=>{
				res.send("删除成功");
			})
		})
		
	})
}