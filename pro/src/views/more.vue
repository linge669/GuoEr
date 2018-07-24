<template>
	<div id="more">
		<router-link :class="{'more_list':true}" to="/newuser">
			<i class="iconfont icon-iconfontzhizuobiaozhun023140"></i>
			<p>新手福利</p>
			<i class="iconfont icon-jinru"></i>
		</router-link>
		<router-link :class="{'more_list':true}" to="/info">
			<i class="iconfont icon-xinxipilu"></i>
			<p>信息披露</p>
			<i class="iconfont icon-jinru"></i>
		</router-link>
		<router-link :class="{'more_list':true}" to="/baozhang">
			<i class="iconfont icon-jiekuan"></i>
			<p>保障措施</p>
			<i class="iconfont icon-jinru"></i>
		</router-link>
		<router-link :class="{'more_list':true}" to="/kuaixun">
			<i class="iconfont icon-zixun"></i>
			<p>果儿快讯</p>
			<i class="iconfont icon-jinru"></i>
		</router-link>
		<router-link :class="{'more_list':true}" to="/touming">
			<i class="iconfont icon-shexiangtouxianxing"></i>
			<p>透明果儿</p>
			<i class="iconfont icon-jinru"></i>
		</router-link>
	</div>
	
</template>

<script>
	import axios from 'axios'
	
	export default{
		name:'More',
		data(){
			return{
				str:"更多"
			}
		},
		mounted(){
			this.$emit("topar",this.str)
			
		},computed:{
			name(){
				return store.state.name
			}
		}
		
	}
</script>

<style scoped="">
	.more_list{
		display: flex;
		justify-content: space-between;
		height: 60px;
		line-height:60px;
		padding: 10px;
		background: white;
		border-bottom: 1px solid black;
	}
	.more_list:nth-of-type(1){
		margin: 20px 0;
		border: 0;
	}
	.more_list i:nth-of-type(1){
		font-size: 30px;
	}
	.more_list i:nth-of-type(2){
		font-size: 20px;
	}
	.more_list p{
		font-weight: bold;
		flex: 1;
		margin-left: 30px;
	}
</style>