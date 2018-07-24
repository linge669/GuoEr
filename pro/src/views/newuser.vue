<template>
	<div>
		<mt-header fixed :title="str" :style="{height:'60px'}">
		  <router-link to="/more" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<section>
			新手福利
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Newuser',
		data() {
			return {
				gg: '关于近期注意防范网络电信诈骗犯罪的公告',
				str: "新手福利",
				arr: []
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
	section{
		
		padding-top: 60px;
	}
</style>