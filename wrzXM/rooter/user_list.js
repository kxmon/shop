module.exports=function(app,MongoClient,crypto,url){
	app.get("/user_list/:page/:num",(req,res)=>{
		var page=req.params.page*1;
		var num=req.params.num*1;
		var wd=req.query.wd;
		MongoClient.connect(url,(err,database)=>{
			var db=database.db("User1819");
			var dt1=new Date().getTime();
			//求最大页数
			var where={}
			if(wd){
				where["uname"]=new RegExp(wd,"i");
			}
			db.collection("user").find(where).count((err,result)=>{
				var count=result;//数据总量
				var maxPage=Math.ceil(count /num);//最大页码
				
				//求当前页的详细数据
				db.collection("user").find(where).sort({time:-1}).skip( (page-1)*num).limit(num).toArray( (err,data)=>{
					var dt2=new Date().getTime();
						var obj={
							maxPage,
							count,
							page,
							data,
							ms:dt2-dt1	
						}
					res.send( JSON.stringify(obj));
				})
			})
			
			
			
			
			
		})
	})
}