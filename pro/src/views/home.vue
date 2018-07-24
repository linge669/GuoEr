<template>
	
	<div>
		<mt-swipe :auto="4000" style="height: 150px;">
		  <mt-swipe-item><img src="../assets/img/ganen.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/img/tupo.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/img/sanzounian.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/img/xinshou.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/img/zhanlue.jpg"/></mt-swipe-item>
		
		</mt-swipe>
		<div class="tongzhi">
			<i class="iconfont icon-laba"></i>
			<span>{{gg}}</span>
			
		</div>
		<div class="meiri">
			<h2>每日推荐</h2>
			<div class="yuan">
				<em></em>
				<span>新手专享</span>
				<b>15%</b>
				<i>预计年化收益率</i>
				
			</div>
			<p>30天项目/限投10000元/到期收益123.29元</p>
			<a>100元起投/正在投标中</a>
			
		</div>
		<div class="list_home">
			<router-link to="/chujie">
				<li>
					<span>
						<i class="iconfont icon-19"></i>
					</span>
					<div class="list_left_home">
						<h3>我要出借</h3>
						<p>预期年化收益率8.7%~10.2%；</p>
						<p>每天10:00至20:00整点发标</p>
						
					</div>
				</li>
			</router-link>
			<router-link to="/zaiquan">
				<li>
					<span>
						<i class="iconfont icon-zhaiquanzhuanrang"></i>
					</span>
					<div class="list_left_home">
						<h3>债权转让</h3>
						<p>项目购买七天之后即可转让；</p>
					</div>
				</li>
			</router-link>
			
		</div>
	</div>
	
</template>
<script>
	import axios from 'axios'
	import store from '../store/store'
	import { Swipe, SwipeItem } from 'mint-ui';
	
	export default{
		name:'Home',
		data(){
			return{
				gg:'关于近期注意防范网络电信诈骗犯罪的公告',
				str:false,
				arr:[]
			}
		},
		mounted(){
			this.$emit("topar",this.str);
			var _this=this
			axios("http://linge669.com/data/getData.php").then(function(data){
				var str=JSON.parse(data.data[0].cj_user);
			})
			
		},
		computed:{
			name(){
				return store.state.name
				
			}
		}
		
	}
</script>

<style scoped="">
	.meiri p{
		margin-top: 30px;
		text-align: center;
		
	}
	.meiri a{
		display:block;
		background: red;
		width: 200px;
		color: white;
		border-radius: 5px;
		padding: 5px 10px;
		margin: 10px auto;
	}
	
	.yuan b{
		font-size: 20px;
		color: red;
		font-weight: 100;
	}
	.yuan span{
		margin-top: 10px;
	}
	.yuan em{
		position: absolute;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		border: 2px solid orangered;
		left: 20%;
	}
	.yuan{
		overflow: hidden;
		position: relative;
		width: 70vw;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	.list_home{
		
		background:white;
		display: flex;
		flex-direction: column;
	}
	.list_home li{
		padding: 20px 10px;
		height: 80px;
		border-bottom: 1px solid black;
	}
	.list_home li span{
		display: inline-block;
		width: 80px;
		height: 80px;
		border-radius: 5px;
		background: #FF0000;
		text-align: center;
		line-height: 80px;
	}
	.list_home span i{
		color: white;
		font-size: 60px;
	}
	.list_left_home{
		display: inline-block;
		height: 80px;
		margin-left: 10px;
	}
	.list_left_home h3{
		font-size: 18px;
		
	}
	.list_left_home p{
		font-size: 14px;
		height: 25px;
		line-height: 25px;
	}
	.list_home li:nth-of-type(1) span{
		background: red;
	}
	.list_home li:nth-of-type(2) span{
		background: orangered;
	}
	img{
		width: 100%;
		height: 150px;
	}
	.tongzhi{
		padding: 10px;
		background: #eeeeee;
	}
	.tongzhi i{
		
		color: red;
		font-size: 20px;
	}
	.tongzhi span{
		text-indent: 10px;
		
	}
	.meiri{
		position: relative;
		height: 200px;
		border: 1px solid yellow;
		
		padding:8px 15px;
		margin-bottom:10px ;
	}
	
</style>