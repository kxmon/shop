module.exports=function(app, multer, fs, MongoClient, url,ObjectId){
	app.post("/order_system", function(req, res){
		var arr= req.body.sendData;
		//把数据放入订单数据库
		var len=arr.length;
		for (var i=0;i<len;i++) {
				delete arr[i]._id; 
				arr[i].time=new Date().toLocaleString();
				arr[i].total=eval(arr[i].count*(arr[i].price-arr[i].shenqian));
				console.log(arr[i]);
		}
		MongoClient.connect(url, (err, database)=>{
					var db = database.db("User1819");								
					db.collection("order").insertMany( arr, (err, result)=>{
						    if(err){
						    	res.send("1");
						    }else{
						    	res.send("0");
						    }
					} );						
		});
		
	})
}