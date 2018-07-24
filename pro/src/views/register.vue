<template>
	<div>
		<div id="register">
			<router-link to="/mine" :class="{'close':true}">
				<i  class="iconfont icon-guanbi1"></i>
			</router-link>
			<h1 class="logo">
				<img src="../assets/img/login_banner.png"/>
			</h1>
			<mt-field placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			<mt-field placeholder="请输入用户名" type="text" v-model="user"></mt-field>
			<mt-field placeholder="请输入密码" type="password" v-model="psw"></mt-field>
			<mt-field v-model="yanzheng" placeholder="请输入手机验证码">
			  <mt-button  @click="getyan()">发送验证码</mt-button>
			</mt-field>
			<mt-button type="primary" size="large" @click="register">立即注册</mt-button>
			<div class="tip">
				<router-link to="/mine">已有账号？立即登录</router-link>
			</div>
		</div>
	</div>
	
	
</template>
<script>
	import axios from 'axios'
	import Vue from "vue"
	
	import $ from "jquery"
	Vue.prototype.$http = axios;
	import { Button } from 'mint-ui';
	import { Field } from 'mint-ui';
	export default{
		name:"Register",
		data(){
			return{
				phone:'',
				user:'',
				psw:'',
				yanzheng:'',
				trueyzm:''
			}
		},
		methods:{
			register(){
				var _this=this;
				if(this.trueyzm==this.yanzheng&&this.trueyzm){
					if(this.user==""||this.password==""||this.phone==""){
						alert("注册信息不能为空")
					}else{
						axios("http://linge669.com/data/userinfo.php",{
							params:{
								username:_this.user,
								password:_this.psw,
								phone:_this.phone,
								status:'register'
							}	
						}).then(function(data){
							if(data.data==1){
								alert("注册成功");
								$.ajax({
									type:"post",
									url:"http://linge669.com/data/usermoney.php",
									data:{
										status:"save",
										username:_this.user
									},success:function(){}
								});
								_this.$router.push("/mine")
							}else if(data.data==0){
								alert('用户名已存在')
							}else{
								alert("用户名或密码不能为空")
							}
						})
					}	
				}else{
					alert("手机验证码不正确")
				}
			},
			getyan(){
				var _this=this;
				
					$.ajax({
						type:"post",
						url:"http://127.0.0.1:3000/register",
						data:{
							phonenum:_this.phone,
							id:'1'
						},
						success:function(data){
							_this.trueyzm=data;
						}
					});
			}
			
		}
	}
	
</script>

<style scoped="">
	h2{
		color: red;
	}
	.logo{
		width: 85vw;
		height: 100px;
		margin: 50px auto;
	}
	a{
		color: dodgerblue;
		cursor: pointer;
	}
	.logo img{
		width: 100%;
		height: 100%;
	}
	input{
		margin-top: 30px;
	}
	.tip{
		text-align: center;
		margin-top: 50px;
	}
	#register{
		width: 85%;
		margin: 0 auto;
	}
	.close{
		position: absolute;
		top: 30px;
		left: 20px;
		
	}
	.close i{
		font-size: 20px;
		
	}
</style>