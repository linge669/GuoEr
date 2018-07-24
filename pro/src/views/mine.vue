<template>
	<div>
		<div id="mine" v-show="!name">
			<h1 class="logo">
				<img src="../assets/img/login_banner.png"/>
			</h1>
			<mt-field style="margin-top:'10px'" placeholder="手机号码/用户名" v-model="user" type="text"></mt-field>
			<mt-field style="margin-top:'10px'" placeholder="登录密码" type="password" v-model="psw"></mt-field>
			<div class="code">
		    	<input type="text" v-model="yzm" placeholder="不区分大小写" class="input-val" />
		        <canvas id="canvas" width="110" height="43"></canvas>
		    </div>
			
			<mt-button type="primary" size="large" @click="login">立即登录</mt-button>
			<div class="tip">
				<router-link to="/register">手机登录</router-link>
				<b></b>
				<router-link to="/register">忘记密码</router-link>
				
			</div>
			
			<div class="tip">
				没有账号？<router-link to="/register">立即注册</router-link>
			</div>
		</div>
		<div id="user_info" v-show="name">
			<section>
				
				<div id="zc">
					<h1>
						<span>你好，尊敬的{{name}}</span>
						<router-link to='/home' @click="tuichu">退出</router-link>
					</h1>
					<p>总资产（元）</p>
					<p>{{arr.user_yu}}</p>
					<div>
						<div id="sy">
							<span>累计收益（元）</span>
							<span>0.00</span>
						</div>
						<div id="ye">
							<span>可用余额（元）</span>
							<span>{{arr.user_yu}}</span>
						</div>
					</div>
					
				</div>
				<div id="gn">
					<p>
						<span @click="tixian"><i class="iconfont icon-licai"></i>提现</span>
						<span @click="toast"><i class="iconfont icon-19"></i>充值</span>
					</p>
					<li @click="showpro">
						<span><i class="iconfont icon-shexiangtouxianxing"></i>我的项目</span>
						<i class="iconfont icon-jinru"></i>
					</li>
					<li>
						<span><i class="iconfont icon-jiekuan"></i>资金管理</span>
						<i class="iconfont icon-jinru"></i>
					</li>
					<li>
						<span><i class="iconfont icon-19"></i>汇付余额</span>
						<i class="iconfont icon-jinru"></i>
					</li>
					<li>
						<span><i class="iconfont icon-chakanjindu"></i>回款计划</span>
						<i class="iconfont icon-jinru"></i>
					</li>
					<li>
						<span><i class="iconfont icon-licai"></i>投资收益</span>
						<i class="iconfont icon-jinru"></i>
					</li>
					
					
				</div>
				
			</section>
			
			
		</div>
	</div>
	
	
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import axios from 'axios'
	import store from '../store/store'
	import { Button } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Field } from 'mint-ui';
	import $ from 'jquery'
	export default{
		name:"Login",
		data(){
			return{
				str:false,
				user:'',
				psw:'',
				checkCode:'',
				yzm:'',
				arr:[]
			}
		},
		methods:{
			showpro(){
				this.$router.push("/showpro")
			},
			tuichu(){
				this.$route.state.name=""
				
			},tixian(){
				var _this=this
				MessageBox.prompt('输入提现金额').then(({ value, action }) => {
					var num=Number(_this.arr.user_yu);
					if(num<Number(value)){
						MessageBox.alert('提现失败').then(action => {
						 余额不足
						});
					}else{
						$.ajax({
			        		type:"post",
			        		url:"http://linge669.com/data/usermoney.php",
			        		data:{
			        			username:store.state.name,
			        			money:num-Number(value),
			        			status:"cz"
			        		},
			        		success:function(data){
			        			if(data==1){
			        				Toast({
									  message: '操作成功',
									  iconClass: 'icon icon-success'
									});
									$.ajax({
						        		type:"post",
						        		url:"http://linge669.com/data/usermoney.php",
						        		data:{
						        			username:store.state.name
						        		},
						        		success:function(data){
						        			_this.arr=JSON.parse(data)[0]
						        		}
						        	});
			        			}
			        		}
			        	});
					}
					
				});
				
			}
			
			,toast(){
				var _this=this
				MessageBox.prompt('输入充值金额').then(({ value, action }) => {
					var num=Number(_this.arr.user_yu);
					$.ajax({
	        		type:"post",
	        		url:"http://linge669.com/data/usermoney.php",
	        		data:{
	        			username:store.state.name,
	        			money:num+Number(value),
	        			status:"cz"
	        		},
	        		success:function(data){
	        			if(data==1){
	        				Toast({
							  message: '充值成功',
							  iconClass: 'icon icon-success'
							});
							$.ajax({
				        		type:"post",
				        		url:"http://linge669.com/data/usermoney.php",
				        		data:{
				        			username:store.state.name
				        		},
				        		success:function(data){
				        			_this.arr=JSON.parse(data)[0]
				        		}
				        	});
	        			}
	        		}
	        	});
				});
			}
			
			,
			login(){
				
				var _this=this;
				console.log(this.yzm)
				if(this.checkCode==this.yzm){
					if(_this.user==""||_this.psw==""){
					    alert("用户名或密码不能为空")
					}else{
						axios("http://linge669.com/data/userinfo.php",{
							method:"post",
							params:{
								username:_this.user,
								password:_this.psw
							}
						}).then(function(data){
							if(data.data[0].username==_this.user&&data.data[0].password==_this.psw){
								store.commit("user",_this.user)
								alert("登录成功")
								_this.$router.push("/home")
							}else if(data.data==0){
								alert("用户名不存在")
								
							}else{
								alert("密码错误");
							}
						})
						
					}
				}else{
					alert("验证码不正确");
					location.reload()
				}
				
			}
		},
		mounted(){
			var _this=this
			var show_num = [];
			_this.checkCode=draw(show_num).join("");
	        $("#canvas").on('click',function(){
	           _this.checkCode=draw(show_num).join("");
	            
	        })
	        if(store.state.name){
	        	$.ajax({
	        		type:"post",
	        		url:"http://linge669.com/data/usermoney.php",
	        		data:{
	        			username:store.state.name
	        		},
	        		success:function(data){
	        			_this.arr=JSON.parse(data)[0]
	        		}
	        	});
	        }
	        this.$emit("topar",this.str);
		},
		computed:{
			name(){
				return store.state.name
			}
		}
	}

    function draw(show_num) {
        var canvas_width=$('#canvas').width();
        var canvas_height=$('#canvas').height();
        var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
        var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        var aCode = sCode.split(",");
        var aLength = aCode.length;//获取到数组的长度
        for (var i = 0; i <= 3; i++) {
            var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
            var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
            var txt = aCode[j];//得到随机的一个内容
            show_num[i] = txt.toLowerCase();
            var x = 10 + i * 20;//文字在canvas上的x坐标
            var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
            context.font = "bold 23px 微软雅黑";
            context.translate(x, y);
            context.rotate(deg);
            context.fillStyle = randomColor();
            context.fillText(txt, 0, 0);
            context.rotate(-deg);
            context.translate(-x, -y);
            
        }
        
        for (var i = 0; i <= 5; i++) { //验证码上显示线条
            context.strokeStyle = randomColor();
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }
        for (var i = 0; i <= 30; i++) { //验证码上显示小点
            context.strokeStyle = randomColor();
            context.beginPath();
            var x = Math.random() * canvas_width;
            var y = Math.random() * canvas_height;
            context.moveTo(x, y);
            context.lineTo(x + 1, y + 1);
            context.stroke();
        }
        return show_num;
    }

    function randomColor() {//得到随机的颜色值
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
	
</script>

<style scoped="">
	section{
		display: flex;
		flex-direction: column;
		
	}
	#gn{
	}
	#gn>p{
		padding: 20px;
		height: 50px;
		background: white;
	}
	#gn>p>span{
		display: inline-block;
		margin-top: 10px;
		height:30px ;
		line-height: 30px;
		width: 45%;
		text-align: center;
		color: royalblue;
	}
	#gn>p>span i{
		font-size: 25px;
	}
	#gn>p>span:nth-of-type(2){
		color: orange;
		border-left: 1px solid #CECECE;
	}
	#gn li{
		display: flex;
		justify-content: space-between;
		height: 60px;
		line-height: 60px;
		margin-top: 10px;
		padding: 0 20px;
		background: white;
	}
	section h1{
		display: flex;
		justify-content: space-between;
		margin: 20px;
	}
	section h1 a{
		color: white;
	}
	#zc{
		padding: 10px;
		color: white;
		background: url(../assets/img/user-bg.jpg) no-repeat top;
	}
	#zc>p{
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 18px;
	}
	#zc>div{
		display: flex;
		justify-content:space-around;
		margin-top: 20px;
	}
	#zc>div span{
		display: block;
		margin-top: 10px;
		text-align: center;
	}
	
	#sy,#ye{
		flex-direction: column;
		display: flex;
		padding: 5px 15px;
		border-radius: 5px;
		background: orange;
		
	}
	.code{
            width: 400px;
            margin:0 auto;
        }
        .input-val{
            width: 50vw;
            background: #ffffff;
            height: 2.8rem;
            padding: 0 2%;
            border-radius: 5px;
            float: left;
            border: none;
            border: 1px solid rgba(0,0,0,.2);
            font-size: 1.0625rem;
        }
        #canvas{
        	margin-left: 10px;
            float:left;
            display: inline-block;
            border:1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
        }
	
	
	h2{
		color: red;
	}
	.logo{
		width: 85vw;
		height: 100px;
		margin: 40px auto;
	}
	a{
		color: dodgerblue;
		cursor: pointer;
	}
	b{
		display: inline-block;
		height: 10px;
		width: 0;
		border: 1px solid #cecece;
		
	}
	.logo img{
		width: 100%;
		height: 100%;
	}
	.inpt{
		margin-top: 30px;
	}
	#login{
		width: 85%;
		margin: 0 auto;
	}
	.tip{
		text-align: center;
		margin-top: 30px;
	}
</style>