<template>
	<div>
		<mt-header fixed :title="str" :style="{height:'50px'}">
		  <router-link to="/more" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<ul class="nav_bar">
			<li><router-link to="/gg">果儿公告</router-link></li>
			<li><router-link to="/dt">果儿动态</router-link></li>
			<li><router-link to="/bd">媒体报道</router-link></li>
		</ul>
		<section>
			<router-view @topar="getdata"></router-view>
		</section>
		
	</div>
</template>

<script>
	export default {
		name: 'Kuaixun',
		data() {
			return {
				str: "果儿快讯"
			}
		},methods:{
			
			getdata(msg){
				this.str=msg
			}
		},
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
		width: 100vw;
		position: fixed;
		background: #ffffff;
		top: 40px;
		height: 40px;
		padding-top: 10px;
		border-bottom:1px solid #cecece ;
	}
	.nav_bar li{
		text-align: center;
		float: left;
		width: 33.3%;
		height: 40px;
	}
	.nav_bar li a{
		display: block;
		margin: 10px auto;
		height: 30px;
		border-right: 1px solid #cecece;
		line-height: 20px;
		width:100%;
	}
	.nav_bar li:nth-of-type(3) a{
		border-right: 0;
	}
	.router-link-active{
		border-bottom: 2px solid deepskyblue;
	}
	section{
		padding-top: 100px;
		
	}
</style>