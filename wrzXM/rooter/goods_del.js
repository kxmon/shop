module.exports=function(app,MongoClient,crypto,url,ObjectId){
	app.post("/goods_del",(req,res)=>{
		var gid=req.body.gid;
		console.log(gid);
		MongoClient.connect(url,(err,database)=>{
			var db=database.db("User1819");
			var where={_id:ObjectId(gid)};
			db.collection("goods").deleteOne(where,(err,result)=>{
				res.send("删除成功");
			})
			
		})
	})
}
