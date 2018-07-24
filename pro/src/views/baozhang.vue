<template>
	<div>
		<mt-header fixed :title="str" :style="{height:'60px'}">
		  <router-link to="/more" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<section>
			保障措施
		</section>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	export default {
		name: 'Baozhang',
		data() {
			return {
				str: "保障措施",
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