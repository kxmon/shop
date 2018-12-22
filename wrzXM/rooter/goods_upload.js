module.exports = function(app, multer, fs){
	//副文本编辑器中的本地上传功能
	app.post("/goods_upload",(req,res)=>{
		var upload=multer({"dest":"public/uploads/a"}).single("img");
		upload(req,res,function(err){
			//console.log(req.file);
			//文件改名
			var arrFilename=req.file.originalname.split(".");
			var kzm=arrFilename[arrFilename.length-1];
			var filename=req.file.path+"."+kzm;
			fs.renameSync(req.file.path, filename);
			//console.log('{"errno":0,"data":["'+filename.replace('public','')+'"]}');
			res.send('{"errno":0,"data":["'+filename.replace('public','').replace(/\\/g,'/')+'"]}');
			//res.send('{"errno":0,"data":["/uploads/a/9447c79505b46b42c5b987fbe6992eeb.jpg"]}')
			
		})
	})
}