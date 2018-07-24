<template>
	<div>
		
			<li v-for="item in arr">
				<router-link :to="{path:'/dtdetail',query:{id:item.id,page:page}}">
					<img class="dt_left" :src="item.pic"/>
					<div class="dt_right">
						<h2>{{item.title}}</h2>
						<span>{{item.addtime}}</span>
					</div>
					
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
		name:"Dt",
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
						typeId:9
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
					typeId:9
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
	.dt_left{
		display: inline-block;
		width: 35vw;
		
	}
	.dt_right{
		display:inline-block;
		width:60vw;
	}
	.dt_right h2{
		padding: 5px ;
	}
	.dt_right span{
		padding-left: 5px;
	}
</style>