<template>
	<div class="out">
		<header v-if="tit">{{tit}}</header>
		<section>
			
			<router-view @topar="getdata"></router-view>
			
		</section>
		<footer>
			<router-link to="/home" tag="span">
				
				<p>
					<i class="iconfont icon-home"></i>
					<b>首页</b>
				</p>
			</router-link>
			<router-link to="/chujie" tag="span">
				<p>
					<i class="iconfont icon-licai"></i>
					<b>出借</b>
				</p>
			</router-link>
			<router-link to="/mine" tag="span">
				<p>
					<i class="iconfont icon-wode"></i>
					<b>我的</b>
				</p>
				
			</router-link>
			<router-link to="/more" tag="span">
				<p>
					<i class="iconfont icon-gengduo"></i>
					<b>更多</b>
				</p>
				
			</router-link>
		</footer>
	</div>
	
</template>

<script>
	export default{
		name:'Main',
		data(){
			return{
				tit:'首页',
				flag:'true'
			}
		},
		methods:{
			
			getdata(msg){
				this.tit=msg
			}
		}
	}
</script>

<style scoped="">
	.out{
		height: 100vh;
		display: flex;
		flex-direction: column;
		
	}
	header,footer{
		height: 50px;
		line-height: 50px;
		text-align: center;
		
		color: white;
		overflow: hidden;
	}
	header{
		font-size: 18px;
		background: deepskyblue;
	}
	footer{
		border-top:1px solid orangered ;
		color:darkgrey;
		height: 60px;
		background: ghostwhite;
	}
	section{
		flex: 1;
		overflow-y: auto;
		background: #f4f4f4;
	}
	footer span{
		float: left;
		width: 25%;
	}
	footer span p{
		display: flex;
		flex-direction: column;
		font-size: 16px;
	}
	footer span p i{
		font-size: 20px;
	}
	footer span p b{
		position: relative;
		bottom:30px ;
		font-weight: 100;
	}
	.router-link-active{
		color: red;
	}
	
</style>