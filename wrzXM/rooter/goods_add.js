module.exports = function(app, multer, fs, MongoClient, url){
	app.post("/goods_add", function(req, res){
		
		var upload = multer({"dest":"public/uploads/b"}).array('pic');
		
		

		upload(req, res, function(err){
			if(err){
				res.send("上传失败");
			    return;
			}
			var len=req.files.length;
			console.log(len);
			console.log(req.files);
		    //文件改名
		    var fileArr=[];
			for (var i=0;i<len;i++) {
				var arrFilename=req.files[i].originalname.split(".");
				var kzm=arrFilename[arrFilename.length-1];
				var filename=req.files[i].path+"."+kzm;
				fs.renameSync(req.files[i].path, filename);
			    fileArr.push(filename);
		    }
			console.log( fileArr);
				
				
				var myobj={
					"name":req.body.name,
					"pic":JSON.stringify( fileArr),
					"content":req.body.content,
					"price":req.body.price,
					"time":new Date()
				}
				
				// 将商品保存到数据库中
				MongoClient.connect(url, (err, database)=>{
					var db = database.db("User1819");
													
					db.collection("goods").insertOne( myobj, (err, result)=>{
						res.send('{"state":1, "msg":"商品添加成功"}');
					} );						
				});
        })   
			
	})
	
}