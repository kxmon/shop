<?php
include "public.php";

$sta=$_GET["sta"];
$uname=$_GET["uname"];
$upwd=$_GET["upwd"];

if($sta=="register"){
	//注册功能
	$sql="SELECT * FROM user WHERE  `uname` = '$uname' ";
	$res=mysql_query($sql);
	$arr=mysql_fetch_array($res);
	if($arr){
		//数据库中已存在用户名 无法完成注册
		echo 2;
	}else{
		//数据库中不存在用户名 可以注册
		$sql="insert into user (`uname`,`upwd`)values('$uname','$upwd')";
		$row=mysql_query($sql);
		if($row){
			echo 1;
		}else{
			echo 2;
		}
	}
	
}
 if($sta=="login"){
 	
	$sql="SELECT * FROM user WHERE  `uname` = '$uname' ";
	$res=mysql_query($sql);
	$arr=mysql_fetch_array($res);
	if($arr){
		
		if($arr["upwd"]==$upwd){
			//登陆成功
			echo 1;
		}else{
			//密码不正确
			 echo 0;
		}
		
	}else{
		//用户名不存在
		echo 2;
	}
 }
	//另改的
	if($sta=="loginn"){
 	
	$sql="SELECT * FROM user WHERE  `uname` = '$uname' ";
	$res=mysql_query($sql);
	$arr=mysql_fetch_array($res);
	if($arr){
			//登陆成功
			echo 1;
	}else{
		//用户名不存在
		echo 2;
	}
	
	
}
?>