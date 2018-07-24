<template>
	<div>
		<ul id="chujie"  
			v-infinite-scroll="loadMore"
  			infinite-scroll-disabled="loading"
  			infinite-scroll-distance="5">
			<li v-for="item in arr">
				<router-link :to="{path:'/chujiedetail',query:{id:item.loan_uid,page:page}}">
					<h3>{{item.title}}</h3>
					<div>
						<p class="chujie_listleft">
							<span><b>{{item.rate}}</b>%</span>
							<i>预期年化收益率</i>
						</p>
						<p class="chujie_listright">
							<span>融资总额<i>{{item.money/10000}}</i>万元</span>
							<span><b></b>{{parseInt(item.get_money/item.money*10000)/100}}%</span>
							<span><em>100</em>元起投/{{item.state==40?"正在投标":"已售罄"}}</span>
						</p>
					</div>
				</router-link>
				
				
			</li>
		</ul>
		
	</div>
	
</template>
<script>
	import { InfiniteScroll } from 'mint-ui';
	import axios from 'axios';
	import { Indicator } from 'mint-ui';
	import store from '../store/store'
	import Vue from "vue"
	Vue.prototype.$http = axios;
	export default{
		name:'Chujie',
		data(){
			return{
				str:'出借',
				arr:[],
				page:0,
				time:'',
				loading:''
			}
		},
		methods:{
			
			loadMore() {
			  this.loading = true;
			  setTimeout(() => {
			    this.page++;
				var _this=this;
					axios({
						method:'get',
						baseURL:'/api',
						url:'default/more-projects',
						params:{page:_this.page}
					}).then(res=>{
						var newarr=res.data
						newarr.map(function(item){
							_this.arr.push(item)
						})
				})
			    this.loading = false;
			  }, 2500);
			}
			
		},
		mounted(){
			this.$emit("topar",this.str);
			var _this=this;
			axios({
				method:'get',
				baseURL:'/api',
				url:'default/more-projects',
				params: {
						page: _this.page
						}
			}).then(res => {
				var newarr = res.data
				newarr.map(function(item) {
					_this.arr.push(item)
			
				})
			});
		},
		computed: {
			
			name() {
				return store.state.name
			}
		}
}
</script>

<style scoped="">
	#chujie{
		height:auto;
		width: 100%;
	}
	#chujie li{
		background: #ffffff;
		display: flex;
		flex-direction: column;
		height: 120px;
		padding: 10px;
		margin-top: 10px;
	}
	#chujie li h3{
		font-size: 18px;
		
		color: #000000;
	}
	.chujie_listleft{
		display: inline-block;
		width: 35%;
	}
	.chujie_listleft span{
		display: block;
		margin:20px 0px 10px;
		color: red;
	}
	.chujie_listleft span b{
		font-weight: normal;
		font-size: 24px;
		color: red;
	}
	.chujie_listleft i{
		font-size: 12px;
	}
	.chujie_listright{
		display: inline-block;
		width: 60%;
	}
	.chujie_listright span{
		display: block;
		height: 20px;
		line-height: 20px;
		margin-top: 5px;
	}
	.chujie_listright span em{
		color: red;
	}
	.chujie_listright span i{
		font-size: 18px;
	}
	.chujie_listright span b{
		display: inline-block;
		height: 5px;
		width: 60%;
		background: red;
		margin-bottom: 3px;
		border-radius: 5px;		
	}
	.loading_more{
		display: block;
		position: absolute;
		bottom:100px;
		height: 80px;
		width: 100%;
		text-align: center;
		line-height: 80px;
		
	}
</style>