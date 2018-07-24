<template>
	<div>
		
			<li v-for="item in arr">
				<router-link :to="{path:'/ggdetail',query:{id:item.id,page:page}}">
					<p>{{item.title}}</p>
					<span>{{item.addtime}}</span>
				</router-link>
			</li>
		<button	@click="addpage">加载更多...</button>
	</div>
</template>

<script>
	import store from '../store/store'
	import axios from "axios"
	import Vue from "vue"
	Vue.prototype.$http = axios;
	export default{
		name:"Gg",
		data(){
			return{
				arr:[],
				page:0,
			}
		},methods:{
			addpage(){
				this.page++
				var _this=this
				axios({
					method:'get',
					baseURL:'/api',
					url:'about/more-data',
					params:{
						page: _this.page,
						typeId:13
						}
				}).then(res => {
					var newarr = res.data
					newarr.map(function(item) {
						_this.arr.push(item)
					})
					store.commit("gglist",this.arr)
				})
				
			}
			
		},mounted(){
			var _this=this
			axios({
				method:'get',
				baseURL:'/api',
				url:'about/more-data',
				params:{
					page: _this.page,
					typeId:13
					}
			}).then(res => {
				var newarr = res.data
				newarr.map(function(item) {
					_this.arr.push(item)
				})
			})
			
		}
	}
	
</script>

<style scoped="">
	a{
		display: block;
		height: auto;
		padding: 20px 5px;
		border-bottom: 1px solid #565656;
	}
	a p{
		margin-bottom: 20px;
		height:20px;
		line-height: 20px;
	}
	button{
		height: 30px;
		line-height: 30px;
		width: 100vw;
		border: 0;
		
	}
	img{
		width: 100vw;
	}
</style>