module.exports=function(app,MongoClient,crypto,url,ObjectId){
	app.get("/goods_info",(req,res)=>{
		var gid=req.query.gid;
		MongoClient.connect(url,(err,database)=>{
			var db=database.db("User1819");
			var where={_id:ObjectId(gid)};
			db.collection("goods").find(where).toArray((err,result)=>{
				//console.log(result);
				res.send(JSON.stringify(result));
			})
		})
	})
}
