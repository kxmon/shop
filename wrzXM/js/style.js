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
/*为轮播图设置样式*/
var timer=null;
	var index=0;
	var $ulist=$(".thirdimg li"),
	    $olist=$(".thirdol li");
	    timer=setInterval(aotuPlay,5000);
	    function aotuPlay(){
	    	index++;
	    	if (index==$olist.size()) {
	    		index=0;
	    	}
	    	$olist.eq(index).addClass("current").siblings().removeClass("current");
	    	$ulist.eq(index).fadeIn(4500).siblings().fadeOut(4500)
	    }
	    $olist.mouseenter(function(){
	    	clearInterval(timer);
	    	index=$(this).index()-1;
	    	aotuPlay();
	    }).mouseleave(function(){
	    	 timer=setInterval(aotuPlay,5000);
	    })
	    $(".leftl").click(function(){
	    	if (index==0) {
	    	    return;
	        }else{
	        	clearInterval(timer);
	        	index=index-2;
	        	aotuPlay();
	        	timer=setInterval(aotuPlay,5000);
	        }
	    	
	    })
	    $(".rightl").click(function(){
	    	if (index==$olist.size()) {
	    		clearInterval(timer);
	    	    index=index-1;
	    	    aotuPlay();
	        }else{
	        	clearInterval(timer);
	        	aotuPlay();
	        	timer=setInterval(aotuPlay,5000);
	        }
	    	
	    })
//设置左右箭头
$(".thirdimg").mouseenter(function(){
	$(".leftl").css("display","block");
	$(".rightl").css("display","block");
})
$(".thirdimg").mouseleave(function(){
	$(".leftl").css("display","none");
	$(".rightl").css("display","none");
})
$(".leftl,.rightl").mouseenter(function(){
	$(this).css("display","block");
})
/*为二级菜单设置样式*/
$(".thirdbMenu a:not(.noc)").on({
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
/*第四部分*/
$(".fourth li").mouseenter(function(){
	$(this).find("h2").animate({
		"top":"49px"
	},300)
	$(this).find("p").css("color","red");
	$(this).find("p").animate({
		"top":"63px"
	},300)
	$(this).find("img").animate({
		"left":"150px"
	},300)
})
$(".fourth li").mouseleave(function(){
	$(this).find("h2").animate({
		"top":"29px"
	},300)
	$(this).find("p").css("color","#888888");
	$(this).find("p").animate({
		"color":"red",
		"top":"43px"
	},300)
	$(this).find("img").animate({
		"left":"122px"
	},300)
})
/*主题部分的双城轮播*/
$(".speli1,.speli2").mouseenter(function(){
	$(".fmles").css("display","block");
	$(".fmri").css("display","block");
})
$(".speli2,.speli1").mouseleave(function(){
	$(".fmles").css("display","none")
	$(".fmri").css("display","none")
})

/*这是轮播*/
var index1=$(".speli1 img").index();
   var timer1=setInterval(aotuPlay1,5000);
    function aotuPlay1(){
    	index1++;
    	if (index1==$(".speli1 img").size()) {
		index1=0;
	    }
	    $(".speli1 img").eq(index1).fadeIn(4500).siblings().fadeOut(4500)
	    $(".speli2 img").eq(index1).fadeIn(4500).siblings().fadeOut(4500)
}	   
$(".fmles").on({
	"mouseenter":function(){
		$(this).css("display","block")
		$(".fmri").css("display","block")
	},
	/*"click":function(){
		if (index1==0) {
	    	    return;
	        }else{
	        	clearInterval(timer1);
	        	index=index-2;
	        	aotuPlay();
	        	timer1=setInterval(aotuPlay1,5000);
	        }
		
	}*/
})
$(".fmri").on({
	"mouseenter":function(){
		$(this).css("display","block")
		$(".fmles").css("display","block")
	},
	/*"click":function(){
		
	    	if (index1==$(".speli1 img").size()) {
	    		clearInterval(timer1);
	    	    index1=index1-1;
	    	    aotuPlay();
	        }else{
	        	clearInterval(timer1);
	        	aotuPlay();
	        	timer1=setInterval(aotuPlay1,5000);
	        }
	    	
	   
	}*/
})
/* 为热门推荐a添加点击事件*/
/*
 border-left: 1px solid #fe5621;
	border-right: 1px solid #fe5621 ;
	border-top:3px solid #fe5621 ;
	border-bottom: 3px solid #fff;
 */
$(".ful li").mouseenter(function(){
	$(this).find("a").css({
		"border-right": "1px solid #fe5621 ",
		"border-left": "1px solid #fe5621 ",
	    "border-top":"3px solid #fe5621 ",
	    "border-bottom": "3px solid #fff"
	})
	$(this).siblings().find("a").css("border","none");
	$(this).find("img").css("display","block");
	
})
$(".ful li").mouseleave(function(){
	$(this).find("img").css("display","none");
})

$(".ful img").mouseenter(function(){
	$(this).css("display","block")
})
$(".ful img").mouseleave(function(){
	$(this).css("display","none")
})
