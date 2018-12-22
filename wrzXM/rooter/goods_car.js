module.exports=function(app, multer, fs, MongoClient, url,ObjectId){
	app.post("/goods_car",(req,res)=>{
		var flaguid=false;
		var flagpid=false;
		var uid=req.body.uid;
		var pid=req.body.pid;
		MongoClient.connect(url,(err,database)=>{
    	    var db=database.db("User1819");
    	    var myShop={
			"uid":uid,
			"uname":req.body.uname,
			"pid":pid,
			"pname":req.body.pname,
			"psrc":req.body.psrc,
			"count":req.body.count,
			"price":req.body.price,
			"shenqian":req.body.shenqian,
			"time":new Date().toLocaleString()
		    }
    	    //判断pid uid是否存在
    	    //uid pid
    	    // 0   0    //直接向数据库插入数据
    	    // 0   1    //直接向数据库插入数据
    	    // 1   0    //直接向数据库插入数据
    	    // 1   1    //根据uid与pid更新数据库
    	    //向数据库查找uid
    	    db.collection("car").find({"uid":uid}).toArray( function(err, result){
    	    	if (result.length !=0) {
				    //用户名已存在
				    flaguid=true;
				    //查找pid是否存在
				    db.collection("car").find({"pid":pid}).toArray( function(err, result){
					  	if (result.length !=0) {
					  		var whereObj = {"uid":uid,"pid":pid};
							var updateObj = {$set:myShop};
							db.collection("car").updateOne(whereObj, updateObj, (err, result)=>{
								console.log(result);
								res.end("1");
								
							});
					  	}else{
					  		db.collection("car").insertOne(myShop,(err,result)=>{
								res.end("0");
								console.log(result);
						    })	
					  	}
				    })
			    }else{
			    	db.collection("car").insertOne(myShop,(err,result)=>{
						res.end("0");
						console.log(result);
				    })	
			    }
    	    })
    	    
    	    
		})
		
	})
}
