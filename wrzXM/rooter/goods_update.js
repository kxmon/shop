module.exports = function(app, multer,fs, MongoClient, url,ObjectId){
	app.post("/goods_update",(req,res)=>{
		var upload=multer({"dest":"public/uploads/a"}).single("img");
		upload(req,res,function(err){
			var gname=req.body.gname;
			var gprice=req.body.gprice;
			var id=req.body.gid;
			//数据库中要保存的路径
			var content=req.body.gcontent;
			var num1=content.indexOf("img");
			var num2=content.indexOf("src");
			//要删除的文件的路径
			var delImg=req.body.gdelImg;
			delImg=delImg.split(" ")[1].split('"')[1];
			console.log(delImg);
			console.log( gname);
			console.log( gprice);
			console.log( id);
			console.log( content);
			res.send("修改成功");
			//只要有上传图片 就要删除原图片
			if(num1!=-1&&num2!=-1){
				//判断文件是否存在 如果存在就删除
				var r=fs.existsSync("./public"+delImg);
				if(r){
					fs.unlinkSync("./public"+delImg);
				}
				
			}
			MongoClient.connect(url, (err, database)=>{
				var db = database.db("User1819");	
				var myobj={
						"name":gname,
						"content":content,
						"price":gprice,
						"time":new Date()
				}
				var whereObj = {_id:ObjectId(id)};
				var updateObj = {$set:myobj};
				db.collection("goods").updateOne(whereObj, updateObj, (err, result)=>{
					console.log(result);
					
				});					
		});
			
	})
	
	})
}