module.exports=function(app,MongoClient,crypto,url){
	app.get("/goods_list/:page/:num",(req,res)=>{
		var page=req.params.page*1;
		var num=req.params.num*1;
		var wd=req.query.wd;
		console.log(wd);
		//连接数据库
		MongoClient.connect(url,(err,database)=>{
			var db=database.db("User1819");
			var where={};
			//求最大页数
			if(wd){
				where={"name": wd}
				//where["name"]=new RegExp(wd);
			}
			db.collection("goods").find(where).count((err,result)=>{
				var count=result;
				var maxPage=Math.ceil( count/num);
				db.collection("goods").find(where).sort({time:-1}).skip( (page-1)*num).limit(num).toArray( (err,data)=>{
					var myObj={
						maxPage,
						count,
						page,
						data,
					}
					res.send( JSON.stringify(myObj));
				})
			})
			
		})
	})
}
