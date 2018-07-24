<template>
	<div>
		<mt-header :title="arr.title">
		  <router-link to="/chujie" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="det_top">
			<div class="det_yuan">
				<span></span>
				<p>预期年化收益率</p>
				<b>{{arr.rate}}%</b>
			</div>
				<p class="det_ze"><i class="iconfont icon-laba"></i>项目总额:{{Math.floor(arr.money)}}</p>
				<p><span class="line"></span>{{parseInt(arr.get_money/arr.money*10000)/100}}%</p>
				<p>100元起投，七天可转让</p>
		</div>
		<div class="det_mid">
			<div class="det_qx">
				<p>还款期限</p>
				<b>{{Math.ceil((arr.back_time-arr.addtime)/3600/24)}}天</b>
			</div>
		<div class="det_sy">
			<p>剩余可购(元)</p>
			<b>{{Number(arr.money-arr.get_money)}}</b>
		</div>
		</div>
		<div class="goumai" v-if="name">
			<input type="text" id="goumai"/>
			<button class="btn_goumai" @click="goumai">购买</button>
		</div>
		<div class="goumai_fal" v-else="name">
			<router-link to="/mine">请先登录您的账号</router-link>
		</div>
	</div>
	
</template>
<script>
	import { Header } from 'mint-ui';
	import axios from 'axios';
	import $ from "jquery"
	import { Toast } from 'mint-ui';
	import store from '../store/store';
	import Vue from "vue";
	Vue.prototype.$http = axios;
	export default{
		name:'Chujiedetail',
		data(){
			return{
				str:'出借详情',
				arr:{},
				page:0,
				userarr:{},
				time:'',
				loading:''
				}
	},methods:{
		goumai() {
			    var _this=this
			    var num=$("#goumai").val()
			    if(false){
			    	Toast({
							message: '你来晚了，已经抢光了'
						});
			    }else{
			    	if(this.userarr.user_yu<num){
				    	Toast({
							message: '购买失败,请充值'
						});
				    	
				    }else{
				    	if(num==""){
				    		Toast({
								message: '输入购买金额'
							});
				    	}else{
				    		$.ajax({
				        		type:"post",
						        url:"http://linge669.com/data/usermoney.php",
						        data:{
						        	username:store.state.name,
						        	money:Number(_this.userarr.user_yu)-Number($("#goumai").val()),
						        	status:"cz"
						        },success:function(data){
						        	if(data==1){
						        		$.ajax({
							        		type:"post",
									        url:"http://linge669.com/data/usermoney.php",
									        data:{
									        	username:store.state.name,
									        	pro:_this.arr.title+"/"+_this.userarr.title,
									        	status:"gm"
									        },success:function(data){
									        	if(data==1){
									        		Toast({
														message: '购买成功',
														iconClass: 'icon icon-success'
													});
									        	}
									        }
							        	})
						        	}
						        }
				        	})
				    	}
				    	
				    	
				    }
			    }
		}

	}, mounted() {
		this.page = this.$route.query.page

		var _this = this;
		axios({
				method:'get',
				baseURL:'/api',
				url:'default/more-projects',
				params: {
						page:_this.page
						}
			}).then(res => {
				var newarr = res.data
				for (var i=0;i<1;i++) {
					_this.arr=newarr[i]
				}
				_this.str=_this.arr.title
			});
			$.ajax({
	        		type:"post",
	        		url:"http://linge669.com/data/usermoney.php",
	        		data:{
	        			username:store.state.name
	        		},
	        		success:function(data){
	        			_this.userarr=JSON.parse(data)[0];
	        		}
	        	});
			
			
		},computed: {
			
			name() {
				return store.state.name
			}
		}
}
</script>

<style scoped="">
	.goumai_fal{
		width: 50%;
		margin: 30px auto;
	}
	.goumai_fal a{
		text-decoration: underline;
	}
	.btn_goumai{
		display: block;
		width: 70%;
		height: 50px;
		background: lightskyblue;
		border-radius: 5px;
		margin:10px auto;
	}
	#goumai{
		display: block;
		width: 70%;
		height: 40px;
		border-radius: 5px;
		margin: 10px auto;
		border: 1px solid cornflowerblue;
	}
	.det_qx,.det_sy{
		text-align: center;
		width: 50%;
	}
	.det_qx b{
		color: red;
		font-weight: 100;
	}
	.det_sy b{
		color: red;
		font-weight: 100;
	}
	.det_mid{
		display: flex;
	}
	.line{
		display: inline-block;
		margin: 0 auto;
		height: 5px;
		background: white;
		width: 60vw;
	}
.det_ze{
	text-align: center;
}
	.det_yuan{
		width: 60vw;
		height: 150px;
		display: flex;
		flex-direction: column;
		text-align: center;
		position: relative;
		margin: 10px auto;
	}
	.det_yuan p{
		margin-top: 50px;
	}
	.det_yuan b{
		font-size: 30px;
	}
	.det_yuan span{
		width: 150px;
		height: 150px;
		border-radius: 50%;
		position: absolute;
		border: 2px solid white;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
	}
	.det_top{
		overflow: hidden;
		height: 300px;
		background: dodgerblue;
		color: white;
	}
	.det_top p{
		text-align: center;
	}
</style>