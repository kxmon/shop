module.exports=function(app,MongoClient,crypto,url,ObjectId){
	app.post("/goods_delp",(req,res)=>{
		var arr=req.body.ids;
		var arr1=arr.split(",");
		var arr2=arr1.map(function(id){
			return ObjectId(id);
		})
		MongoClient.connect(url,(err,database)=>{
			var db=database.db("User1819");
			var where={_id:{$in:arr2}};
			console.log(arr2);
			db.collection("goods").deleteMany(where,(err,result)=>{
				res.send("删除成功");
			})
		})
		
		
		
		
		
		
		
	})
}
