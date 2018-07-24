<template>
	<div>
		<mt-header fixed :title="str" :style="{height:'60px'}">
		  <router-link to="/more" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<ul class="nav_bar">
			<li><router-link @click="changesty" to="/gs">公司简介</router-link></li>
			<li><router-link @click="changesty" to="/gl">管理团队</router-link></li>
			<li><router-link @click="changesty" to="/zz">资质荣誉</router-link></li>
			<li><router-link @click="changesty" to="/yw">业务信息</router-link></li>
		</ul>
		<section>
			<router-view></router-view>
		</section>
		
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Navbar, TabItem } from 'mint-ui';
	export default {
		name: 'Info',
		data() {
			return {
				gg: '关于近期注意防范网络电信诈骗犯罪的公告',
				str: "信息披露",
				arr: []
			}
		},methods:{
			
			getdata(msg){
				this.str=msg
			},
			changesty(e){
				var oLi=document.getElementsByTagName("li");
				for(var i=0;i<oLi.length;i++){
					oLi[i].children[0].className=""
				}
				e.target.className="active";
				
			}
		}
		,
		mounted() {
			this.$emit("topar", this.str);
			var _this = this
		},
		computed: {
			name() {
				return store.state.name
	
			}
		}
}
</script>

<style scoped="">
	.nav_bar{
		width: 100%;
		position: fixed;
		background: #ffffff;
		top: 60px;
		height: 40px;
		padding-top: 10px;
		border-bottom:1px solid #cecece ;
	}
	.nav_bar li{
		text-align: center;
		float: left;
		width: 25%;
		height: 40px;
	}
	.nav_bar li a{
		display: block;
		margin: 0 auto;
		height: 20px;
		border-right: 1px solid #cecece;
		line-height: 20px;
		width:80px;
	}
	.nav_bar li:nth-of-type(4) a{
		border: 0;
	}
	.router-link-active{
		border-bottom: 2px solid deepskyblue;
	}
	section{
		padding-top: 130px;
		
	}
</style>