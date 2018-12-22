module.exports=function(app, multer, fs, MongoClient, url,ObjectId){
	app.get("/order_list/:page/:num",(req,res)=>{
		var page=req.params.page*1;
		var num=req.params.num*1;
		var wd=req.query.wd;
		MongoClient.connect(url,(err,database)=>{
			var db=database.db("User1819");
			//求最大页数
			var where={}
			if(wd){
				where["uid"]=wd;
			}
			db.collection("order").find(where).count((err,result)=>{
				var count=result;//数据总量
				var maxPage=Math.ceil(count /num);//最大页码
				
				//求当前页的详细数据
				db.collection("order").find(where).sort({time:-1}).skip( (page-1)*num).limit(num).toArray( (err,data)=>{
					
						var obj={
							maxPage,
							count,
							page,
							data
						}
						console.log("这是要返回的数据",obj);
					res.send( JSON.stringify(obj));
				})
			})
			
		})
	})
}
