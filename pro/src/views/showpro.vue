<template>
	<div>
		<mt-header title="购买过的项目">
		  <router-link to="/mine" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="show_list_pro">
			<li v-for="(item,i) in proId">
				<p>已购买项目{{i+1}}：<span>{{item}}</span></p>
			</li>
		</div>
		
		
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import axios from 'axios';
	import $ from "jquery";
	import store from '../store/store';
	export default{
		name:"Sp",
		data(){
			return{
				userarr:{},
				proId:[],
				pro:[]
			}
		},mounted(){
			var _this=this
			$.ajax({
	        	type:"post",
	        	url:"http://linge669.com/data/usermoney.php",
	        	data:{
	        		username:store.state.name
	        	},
	        	success:function(data){
	        		_this.userarr=JSON.parse(data)[0];
	        		_this.proId=_this.userarr.buy_pro.split("/")
	        		for(var i=0;i<_this.proId.length;i++){
	        			if(_this.proId[i]==""||_this.proId[i]=="undefined"){
	        				_this.proId.splice(i,1)
	        			}
	        		}
	        	}
	        });
			
			
		}
		,computed:{
			name(){
				return store.state.name
			}
		}
	}
	
</script>

<style scoped="">

.show_list_pro{
	margin: 20px ;
}
.show_list_pro li{
	height: 50px;
	background: powderblue;
	line-height: 50px;
	padding-left: 10px;
	border-radius: 5px;
}
.show_list_pro li span{
	color: red;
}
</style>