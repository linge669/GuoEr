<template>
	<div>
		<mt-header fixed title="动态详情" :style="{height:'50px'}" >
		  <router-link to="/dt" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<section id="main_in" v-for="item in arr">
			<h1>{{item.title}}</h1>
			<p class="tips"><span>{{item.addtime}}</span>　　　<span>来源：{{item.from}}</span></p>
			<div id="content" v-html="item.content">
				
			</div>
		</section>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import axios from "axios";
	import Vue from"vue";
	Vue.prototype.$http = axios;
	import store from '../store/store'
	export default{
		name:"Bddetail",
		data(){
			return{
				arr:[],
				ggnum:"",
				page:''
			}
		},
		methods:{
			
			
		},mounted(){
			this.id=this.$route.query.id;
			this.page=this.$route.query.page;
			var _this=this
			for(var i=0;i<=this.page;i++){
				axios({
					method:'get',
					baseURL:'/api',
					url:'about/more-data',
					params:{
						page:i,
						typeId:9
						}
				}).then(res => {
					var newarr = res.data
					newarr.map(function(item) {
						if(item.id==_this.id){
							
							_this.arr.push(item)
						}
						
					})
				})
			}
		},computed:{
			gglist(){
				return store.state.gglist
				
			}
		}
	}
	
</script>

<style scoped="">
	#main_in{
		padding: 50px 10px;
	}
	h1{
		font-size: 24px;
		margin: 10px 0;
	}
	.tips{
		font-size: 14px;
		color: #A9A9A9;
	}
	img{
		width: 340px;
		height: 340px;
	}
	#content{
		width: 95vw;
		height: auto;
		overflow: hidden;
	}
	#content img{
		width: 340px;
		height: 340px;
	}
</style>