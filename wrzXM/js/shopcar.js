 var pid= localStorage.id,
	 pname= localStorage.name,
	 psrc= localStorage.src,
	 pcount= localStorage.count,
	 price=	localStorage["price"],
	 pshenqian=	localStorage["shenqian"];
	 console.log(price);
	 //计算总金额
	 var sum=pcount*(price-pshenqian);
	 $(".sumspan").html(sum);
var str="";
str=`<span class="proimg">
		<img src="../img/product/${psrc}" />
	</span>
	<span class="proname">${pname}</span>
	<span class="porprice">${price}</span>
	<span class="prohui">${pshenqian}</span>
	<span class="procount">${pcount}</span>`;
$(".thirdbot").html( str);	

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