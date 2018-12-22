$liul=$(".liul");
console.log($liul);
$liul.mouseenter(function(){
	//获取ul的高度
	var ulh=$(this).children("ul").height();
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


$(".noc").mouseenter(function(){
	$(this).css("visibility","hidden");
	$(".thirdbMenu").css("display","block")
})
$(".thirdbMenu").mouseleave(function(){
	$(this).css("display","none");
	$(".noc").css("visibility","visible");
})
$(".thirdbMenu a:not(.nocm)").on({
	"mouseenter":function(){
	$(this).css({
		"background":"#fff",
		"color":"#000"
		});
	$(this).next().css("display","block")
    },
    "mouseleave":function(){
    	$(this).css({
		"background":"none",
		"color":"#fff"
		});
	$(this).next().css("display","none")
    }


})
$(".thirdbMenu img").on({
	"mouseenter":function(){
		$(this).css("display","block");
	},
	"mouseleave":function(){
		$(this).css("display","none")
	}
})
/*放大镜的面向对象*/

/* 当鼠标移入到ul 的 li 上面  对应的图改变*/
    var mask=document.querySelector(".mask"),
		box=document.querySelector(".fifbox"),
		small=document.querySelector(".small"),
		smtop=document.querySelector(".smtop"),
		smbot=document.querySelector(".smbot"),
		big=document.querySelector(".big");
for (let i=0;i<smbot.children.length;i++) {
	smbot.children[i].onmouseenter=function(){
		//排他
		for(var j=0;j<smbot.children.length;j++){
			smtop.children[j].style.display="none";
		}
		//让当前图片显示
		smtop.children[i].style.display="block";
		big.children[0].src="../img/product/"+(i+1)+".jpg";
		
	}
			
}
function Mintor(){
	this.mask=document.querySelector(".mask");
	this.box=document.querySelector(".fifbox");
	this.small=document.querySelector(".small");
	this.smtop=document.querySelector(".smtop");
	this.smbot=document.querySelector(".smbot");
	this.big=document.querySelector(".big");
	
	//让mask 与big显示
	this.vis=function() {
		this.smtop.onmouseenter=function(){
			this.mask.style.display="block";
			this.big.style.display="block";
		}.bind(this),
		this.smtop.onmouseleave=function(){
			this.mask.style.display="none";
			this.big.style.display="none";
		}.bind(this)
		return this;
	}
	this.fnmove=function(){
		this.smtop.onmousemove=function(e){
			var e=e||event;
			var px=e.pageX;
			var py=e.pageY;
			var fif=document.querySelector(".fifthl");
			var x=px-this.smtop.offsetLeft-fif.offsetLeft-this.mask.offsetWidth/2;
			var y=py-this.smtop.offsetTop-fif.offsetTop-this.mask.offsetHeight/2;
			
			maxl=this.smtop.offsetWidth-this.mask.offsetWidth;
			maxt=this.smtop.offsetHeight-this.mask.offsetHeight;
			x=Math.min(Math.max(0,x),maxl);
			y=Math.min(Math.max(0,y),maxt);
			
			this.mask.style.left=x+"px";
			this.mask.style.top=y+"px";
			//console.log(this.big.children[0].offsetWidth);
			//console.log(this.big.offsetWidth);
			this.big.children[0].style.left=-x*1.1*(this.big.children[0].offsetWidth-this.big.offsetWidth)/maxl+"px";
			this.big.children[0].style.top=-y*(this.big.children[0].offsetHeight-this.big.offsetHeight)/maxt+"px";
			return false;
		}.bind(this)
	}
}
new Mintor().vis().fnmove();

/* 设置商品详情*/
$(".sixrt li").mouseenter(function(){
	var index=$(this).index();
	$(this).css("color","#f32613").siblings().css("color","#000000")
	$(".sixrb img").eq(index).css("display","block").siblings().css("display","none")
	
})
/*当点击— +时 数量改变*/
$(".updateCount").click(function(){
	var count=$(".shop-count").html();
	var sign=$(this).html();
	if (sign=="-"&&count==1) {
		return;
	}
	var count=parseInt(count)+$(this).data("number");
	$(".shop-count").html(count);
	//var count1=parseInt(localStorage["count"])+1;
	localStorage.count=`${count}`;
})
/*当用户点击购物车时 count+1 但是数量里的数不变  像数据库发起请求*/
$(".obt3").click(function(){
	var count1=parseInt(localStorage["count"])+1;
	localStorage.count=`${count1}`;
	var userObj=getCookie("user");
	console.log(userObj.uname);
	var shopObj={
		  "uid":userObj.uid,
		  "uname":userObj.uname,
		  "pid":localStorage.id,
		  "pname":localStorage.name,
		  "psrc": localStorage.src,
		  "count":localStorage.count,
		  "price":localStorage["price"],
		  "shenqian":localStorage["shenqian"]
	}
	console.log(shopObj);
	//向数据库发起请求
	if (userObj.uid) {
		$.post("/goods_car",shopObj,function(result){
		console.log(result);
	    })
	}else{
		alert("请先登录");
	}
	
})
//购物车部分
var hrefStr = location.href; 

var pid = hrefStr.split("=")[1];
console.log( pid )
$.ajax({
	type:"get",
	url:"../data.json",
	async:true,
	success:function(msg){
		for(var i=0;i<msg.length;i++){
			var arr=msg[i];
			if (pid==arr.id) {
				console.log(arr.id,arr.name);
			  localStorage.id=`${arr.id}`;
			  localStorage.name=`${arr.name}`;
			  localStorage.src=`${arr.src}`;
			  localStorage.count="1";
			  localStorage["price"]=`${arr.price}`;
			  localStorage["shenqian"]=`${arr.shenqian}`;
			}
		}
	}
});
//点击购物车结算 实现页面
$(".sethtw").click(function(){
	location.href="http://10.9.26.215:8080/html/shopcar.html";
})
