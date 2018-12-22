module.exports=function(app, multer, fs, MongoClient, url,ObjectId){
	app.post("/goods_carDel",(req,res)=>{
		var arr=req.body.sendData;
		MongoClient.connect(url, (err, database)=>{
			var db = database.db("User1819");
			var len=arr.length;
			for (var i=0;i<len;i++) {
				arr[i]._id=ObjectId(arr[i]._id);
				db.collection("car").deleteOne(arr[i], (err, result)=>{
					console.log(result);
					if(i==len){
						res.end("删除成功");
					}
					
		        })
				
				//console.log(arr[i]);
			}
			
		})
		
	})
}
