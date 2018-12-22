/*先判断输入是否正确*/

/*或取一个4位数的随机数*/
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
/*
点击mask 改变验证码
 */
$(".mask").click(function(e){
	var e=e||event;
	e.stopPropagation();
	var shu=getrand();
	$(".p3").find("b").html(shu);
})
var tel=$("#tel"),
    pwd=$("#pwd"),
    jpd=$("#jpd");
 
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

tel.iptEm();
pwd.iptEm();
jpd.iptEm();
//判断输入是否正确
$.extend({
	/*判断手机号*/
	telp: function(val) {
		this.telphone=val;
		this.tel = false;
		var reg1 = /^\d{11}$/;
		if(reg1.test(val)) {
		  this.tel = true;
		}else{
			this.tela();
		}
	},
	tela:function(){
		if (this.tel==false) {
			var $spn=$("span");
			$spn.html("请输入正确的手机号码");
			$(".a2").eq(0).append( $spn);
			$spn.css({
				position : "absolute",
				left: 260,
				top: 0,
				color: "red",
				fontSize: 14	
			})
			
		}
		
	},
	/*让密码框的文字显示为* */
	tech:function(val3){
	    var reg2=/\w/g;
  	    this.str=val3.val();
  	    this.res=this.str.replace(reg2, "*");
  	    val3.val(this.res);
  	    this.pwdt(this.str).pwdf();
	   return this;
	},
	/*判断密码框*/
	pwdt:function(val1){
		this.pwdn=false;
		var reg3=/^\w{6,}$/;
		if (reg3.test(val1)) {
			this.pwdn=true;
		}
		return this;
	},
	pwdf:function(){
		if (this.pwdn==false) {
			var $spn=$("span");
			$spn.html("密码为数字 字母 下划线 不少于六位");
			$(".a2").eq(1).append( $spn);
			$spn.css({
				position : "absolute",
				left: 260,
				top: 0,
				color: "red",
				fontSize: 14	
			})
			
		}
		
	},
	//判断验证码
	jpdp:function(val2){
		this.jpd=false;
		var yan=$(".p3").find("b").html();
		if (yan==val2) {
			this.jpd=true;	
			
		}else{
			var $spn=$("span");
			$spn.html("验证码输入错误");
			$(".a2").eq(2).append( $spn);
			$spn.css({
				position : "absolute",
				left: 180,
				top: 0,
				color: "red",
				fontSize: 14	
			})
		}
		
	},
	/*往数据库中写入数据*/
	writedata:function(){
		console.log(this.tel,this.str,this.jpd,this.pwdn,this.telphone);
		if (this.tel==true&&this.jpd==true&&this.pwdn==true) {
			 var data = `uname=${this.telphone}&upwd=${this.str}`;
			 console.log(this.data);
			(async function(){
				var u= await (await fetch("http://10.9.26.215:8080/register?"+data)).text();
				if (u=="1") {
					alert("用户名已存在,请重新输入");
				} else if(u=="0"){
					location.href="login.html";
				}
					
			})();
			
			
		}else{
				if (!this.tel) {
					this.tela();
				}
				if (!this.pwdn) {
					this.pwdf();
				}
				if (!this.jpd) {
					this.jpdp(jpd.val());
				}
		}
	}
	
	
})
tel.blur(function(){
	var telv=$(this).val();
	$.telp(telv);
})
pwd.blur(function(){
	$.tech(pwd);
})
jpd.blur(function(){
	var jpdv=$(this).val();
	$.jpdp(jpdv);
})
$(".p4").click(function(){
	if ( !$(".ck").prop("checked") ) {
		return;
	}else{
		$.writedata();
	}
	
})
