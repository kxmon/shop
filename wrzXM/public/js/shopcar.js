 //显示购物车数据
 var userObj=getCookie("user");
 console.log(userObj.uid);
 var uname=userObj.uname;
 var uid=userObj.uid;
 var myGood="";
 function showGood(){
 	if (uid) {
 	$.post("/goods_order",{"uid":uid},function(result){
 		var str="";
 		var sum=0;
 		if(result!="0"){
			myGood=JSON.parse(result);
	 		var len=myGood.length;
			console.log(myGood[0]);
				for (var i=0;i<len;i++) {
					var res=myGood[i];
				    str+=`<div class="thirdbot">
				    <span class="proimg">
						<img src="../img/product/${res.psrc}" />
					</span>
					<span class="proname">${res.pname}</span>
					<span class="porprice">${res.price}</span>
					<span class="prohui">${res.shenqian}</span>
					<span class="procount">${res.count}</span>
					</div>
				    `;
				   sum+=eval(res.count*(res.price-res.shenqian))
				}
				$(".thirdbot").html( str);
				//计算总金额
	            
	            $(".sumspan").html(sum);
		}else{
			str=document.createTextNode("您还没有购买任何商品");
			$(".thirdbot").html( str);	
		}
 		
	})
    }else{
 	    alert("请先登录")
    }
 }
showGood();
//点击提交订单 把数据提交到订单系统
$("#orderObtn").click(function(){
	
	$.post("/order_system",{"sendData":myGood},function(result){
		if (result=="0") {
			//删除购物车数据库
			$.post("/goods_carDel",{"sendData":myGood},function(result){
				console.log(result);
			})
			
		} else if(result=="1"){
			alert("订单提交失败,请稍后重试");
		}
	})
})

/*选择省 县 市*/
var provArr = ["辽宁","山西","河北"];//省
	
var cityArr = [["沈阳","大连","铁岭"],["大同","太原"],["邯郸","石家庄","唐山","雄安"]];//市
	
var countyArr = [[["s1","s2"],["d1"],["昌图","莲花乡"]],[["t1","t2"],["y1"]],[["h1"],["s1","s2"],["tangshan1"],["xiongan1"]]];//县
	
//先把provArr中的数据加入到第一个select中
for(var i=0;i<provArr.length;i++){
	$("#prov").append("<option index="+i+">"+provArr[i]+"</option>");
}
$("#prov").change(function(){  
	$("#city").empty();
	var index=$(":selected").attr("index");
	
	var cityA=cityArr[index];
	
		for(var i=0;i<cityA.length;i++){
		$("#city").append("<option pid="+index+"_"+i+">"+cityA[i]+"</option>");
	}
})
$("#city").change(function(){
	
	$("#country").empty();
	var index=$("#city :selected").attr("pid");
	var proIndex=index.split("_")[0];
	var cityIndex=index.split("_")[1];
	var cityA=countyArr[proIndex][cityIndex];
	for(var i=0;i<cityA.length;i++){
		$("#country").append("<option>"+cityA[i]+"</option>");
	}
})

//为头部菜单设置样式

$liul=$(".liul");
$liul.mouseenter(function(){
	//获取ul的高度
	var ulh=$(this).children("ul").height();
	console.log(ulh);
	//让ul显示
	$(this).children("ul").css({"display":"block","height":0}).animate({height :ulh },1000)
	/*$(this).find("li:not('.hl')").mouseenter(function(e){
		//阻止冒泡
		e.stopPropagation();
		$(this).css("background","#f6f6f6").siblings().css("background","");
	})*/
})
$liul.children("ul").mouseleave(function(){
	//判断当前ul下有几个li
	
	var ulc=$(this).children("li").size();
	console.log(ulc);
	$(this).animate({height : 0},500,function(){
		$(this).css("display","none")
		$(this).css("height",ulc*29                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          )
	})
})
//为收缩框头部设置样式
$(".dianpu").children("ul").mouseenter(function(){
	$(this).children(".dianpu2").css("display","block");
}).mouseleave(function(){
	$(this).children(".dianpu2").css("display","none");
})
/*为搜索框设置焦点事件*/
$(".wenben").focus(function(){
	$(this).html("");
})
/*为我的商城设置样式*/
$(".sethon").bind("mouseenter",function(){
	$(".sethonblow").css("display","block");
	/*让白色的背景图显示*/
	$(".sethonblowe").css("display","block");
})
$(".sethonblow").on("mouseleave",function(){
	$(this).css("display","none");
	$(".sethonblowe").css("display","none");
})
$(".sethonblow1b").mouseenter(function(){
	$(this).css("background-color","#E2E7EB");
}).mouseleave(function(){
	$(this).css("background-color","");
})
$(".sethonblow2").find("a").mouseenter(function(){
	$(this).css("color","#f15c18");
}).mouseleave(function(){
	$(this).css("color","#333333");
})