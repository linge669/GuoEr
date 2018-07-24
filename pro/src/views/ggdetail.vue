<template>
	<div>
		<mt-header fixed title="详情" :style="{height:'50px'}" >
		  <router-link to="/gg" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<section id="main_in" v-for="item in arr">
			<h1>{{item.title}}</h1>
			<p class="tips"><span>{{item.addtime}}</span>　　　<span>来源：{{item.from}}</span></p>
			<div v-html="item.content">
				
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
		name:"Ggdetail",
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
						typeId:13
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
			
		}
	}
	
</script>

<style scoped="">
	#main_in{
		padding: 50px 10px;
		overflow: hidden;
	}
	h1{
		font-size: 24px;
		margin: 10px 0;
	}
	.tips{
		font-size: 14px;
		color: #A9A9A9;
	}
	#main_in div img{
		width: 100vw !important;
	}
</style>