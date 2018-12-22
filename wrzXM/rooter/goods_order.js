module.exports=function(app, multer, fs, MongoClient, url,ObjectId){
	app.post("/goods_order",(req,res)=>{
		
		var uid=req.body.uid;
		//console.log(uid);
		MongoClient.connect(url,(err,database)=>{
    	    var db=database.db("User1819");
    	    db.collection("car").find({"uid":uid}).toArray( function(err, result){
    	    	//console.log(result);
				if (result.length !=0) {
					var result=JSON.stringify(result);
					res.send(result);
				}else{
					res.end("0");
				}
		    });	
    	    
    	    
    	})   
    })	
    	
}
