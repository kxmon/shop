/*点击看不清 换数字*/
function rand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}
function getrand(){
	var str = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
	var color = "";
	for( var i =1 ; i <= 4 ; i++ ){
		color += str.charAt( rand(0,61) );
	}
	return color;
}
//mask的显示和隐藏
$(".p3").find("b").mouseenter(function(){
	$(".mask").css("display","block");
})
$(".mask").mouseleave(function(){
	$(".mask").css("display","none");
})
$(".mask").click(function(e){
	var e=e||event;
	e.stopPropagation();
	var shu=getrand();
	$(".p3").find("b").html(shu);
})
/*为li 添加点击事件*/
$(".litwo").click(function(){
	$(this).css({
		background:"url(../img/register/u1.png) no-repeat right bottom",
	})
	$(this).prev().css({
		"background":"none",
		"color":"#9999b2"
		
	});
	$(".conrc").animate({
		left:"-400px",
		top:"60px",
		opacity:0
	},250,function(){
		$(".conrc1").animate({
			left:"0px",
			top:"60px",
			opacity:1
		},250)
	})

})
/*为第二个li添加点击事件*/
$(".lione").click(function(){
	$(this).css({
		background:"url(../img/register/u1.png) no-repeat left bottom",
	})
	$(this).next().css({
		"background":"none",
		"color":"#9999b2"
		
	});
	$(".conrc1").animate({
			left:"-400px",
			top:"60px",
			opacity:0
		},250,function(){
			$(".conrc").animate({
				left:"0px",
				top:"60px",
				opacity:1
			},250)
			
			
		})
})
$.fn.extend({
	/*定义一个插件让input边框消失 内容为空*/ 
	iptEm:function(){
		this.focus(function(){
			this.val("");
	        this.css("outline","none");  
		}.bind(this))
		 return this;
	}
})
var tel=$("#tel"),
    pwd=$("#pwd"),
    jpd=$("#jpd"),
    tel1=$("#tel1"),
    pwd1=$("#pwd1"),
    jpd1=$("#jpd1");
tel.iptEm();
pwd.iptEm();
jpd.iptEm();
tel1.iptEm();
pwd1.iptEm();
jpd1.iptEm();
/*用户登录*/

function Login(val1,val2,val3){
	/*三个要判断的数*/
	this.body={
		telm:val1,
        pwdm:val2,
        jpdm:val3
	}
	this.flag={
		telf:false,
		pwdf:false,
		jpdf:false
	}
	    this.telpan=function(){
		/*判断用户名*/
		var reg1 = /^\d{11}$/;
		if(reg1.test( this.body.telm)) {
		  this.flag.telf = true;
		  $(".active").remove();
		}else{
			this.telpan1();
		}
	    return this;
	    }
		this.telpan1=function(){
			var $spn=$("span");
				$spn.html("请输入正确的手机号码");
				$spn.addClass("active");
				$(".a2").eq(0).append( $spn);
				$spn.css({
					width:500,
					height:30,
					position : "absolute",
					left: 210,
					top: 0,
					color: "red",
					
				})
				return this;
		}
		/*判断密码*/
		this.pwdpan=function(){
			var reg3=/^\w{6,}$/;
			if (reg3.test( this.body.pwdm)) {
				this.flag.pwdf = true;
				 $(".active1").remove();
			}else{
				this.pwdpan1();
			}
			return this;
		}
		this.pwdpan1=function(){
			var $spn=$("span");
				$spn.html("请输入正确的密码");
				$spn.addClass("active1");
				$(".a2").eq(1).append( $spn);
				$spn.css({
					width:500,
					height:30,
					position : "absolute",
					left: 210,
					top: 0,
					color: "red",
					
				})
				return this;
		}
		//判断验证码
		this.jpdpan=function(){
			
			var yan=$(".p3").find("b").html();
			if (yan==this.body.jpdm) {
				this.flag.jpdf=true;
				$(".active2").remove();
			}else{
				var $spn=$("span");
				$spn.html("请输入正确的验证码");
				$spn.addClass("active2");
				$(".a2").eq(2).append( $spn);
				$spn.css({
					width:500,
					height:30,
					position : "absolute",
					left: 210,
					top: 0,
					color: "red",
					
				})
				return this;
			}
			
			return this;
			
		}
		
}

$(".p4").click(function(){
	if ( !$(".ck").prop("checked") ) {
		return;
	}else{
		var login=new Login( tel.val(),pwd.val(),jpd.val()).telpan().pwdpan().jpdpan();
			if (login.flag.telf&&login.flag.pwdf&&login.flag.jpdf) {
				console.log(login.flag.telf,login.flag.pwdf,login.flag.jpdf);
			    var data = `uname=${tel.val()}&upwd=${pwd.val()}`;
			    //向数据库发送数据
			    (async function(){
			    	var u=await (await fetch("http://10.9.26.215:8080/loginone?"+data)).text();
			    	   if (u=="1") {
			    	   	   //登录成功,转跳到首页
			    	   	   location.href="/";
			    	   }else{
			    	   	   alert(用户名或者密码错误);
			    	   }
			    })()
			    
			   }
				
		}
	
	
})
//另一种登录方式
function Login1(val1,val2,val3){
	/*三个要判断的数*/
	this.body={
		telm:val1,
        jpdm:val2,
        pwdm:val3
	}
	this.flag={
		telf:false,
		jpdf:false,
		pwdf:false
	}
	    this.telpan=function(){
		/*判断用户名*/
		var reg1 = /^\d{11}$/;
		if(reg1.test( this.body.telm)) {
		  this.flag.telf = true;
		  $(".active").remove();
		}else{
			this.telpan1();
		}
	    return this;
	    }
		this.telpan1=function(){
			var $spn=$("span");
				$spn.html("请输入正确的手机号码");
				$spn.addClass("active");
				$(".a2").eq(0).append( $spn);
				$spn.css({
					width:500,
					height:30,
					position : "absolute",
					left: 210,
					top: 0,
					color: "red",
					
				})
				return this;
		}
		
		//判断验证码
		this.jpdpan=function(){
			var yan=$(".p3").find("b").html();
			console.log(yan);
			if (yan==this.body.jpdm) {
				this.flag.jpdf=true;
				$(".active2").remove();
			}else{
				var $spn=$("span");
				$spn.html("请输入正确的验证码");
				$spn.addClass("active2");
				$(".a2").eq(1).append( $spn);
				$spn.css({
					width:500,
					height:30,
					position : "absolute",
					left: 210,
					top: 0,
					color: "red",	
				})
			}
			return this;
		}
		//判断动态码
		
		this.pwdpan=function(){
			var yan=1234;
			if (yan==this.body.pwdm) {
				this.flag.pwdf=true;
				$(".active1").remove();
			}else{
				var $spn=$("span");
				$spn.html("请输入正确的动态码");
				$spn.addClass("active1");
				$(".a2").eq(2).append( $spn);
				$spn.css({
					width:500,
					height:30,
					position : "absolute",
					left: 210,
					top: 0,
					color: "red",	
				})
			}
			return this;
			
		}
}


$(".p4").click(function(){
	var login=new Login1( tel1.val(),jpd1.val(),pwd1.val()).telpan().jpdpan().pwdpan();
		
		if (login.flag.telf&&login.flag.jpdf&&login.flag.pwdf) {
			console.log(login.flag.telf,login.flag.pwdf,login.flag.jpdf);
			var data = `uname=${tel1.val()}`;
			     //向数据库发送数据
			    (async function(){
			    	var u=await (await fetch("http://10.9.26.215:8080/logintwo?"+data)).text();
			    	   if (u=="1") {
			    	   	   //登录成功,转跳到首页
			    	   	   location.href="/";
			    	   }else{
			    	   	   alert(用户名或者密码错误);
			    	   }
			    })()
		 			
		 		    
			 	
			}
		
})
		






