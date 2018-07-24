<template>
	<div>
		<mt-header fixed :title="str" :style="{height:'60px',background:'white',color:'black'}">
		  <router-link to="/more" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <router-link slot="right" to="/home"><i class="iconfont icon-home"></i></router-link>
		</mt-header>
		<section>
			<h4>
				<img src="../assets/img/video_banner.png"/>
			</h4>
			<div class="video_main dw">
           
            <ul>
                <li class="video_main_video">
                    <p>公司前台 <a class="living">直播中</a></p>
                    <a href="http://www.iermu.com/svideo/64fae375191d9611f870f3dc850b5f68/285425">
                        <div class="video-img video-shade">
                            <img src="../assets/img/video_01.png" width='100%' height="200px" alt='公司前台'/>
                        </div>
                    </a>
                </li>
                <li class="video_main_video">
                    <p>运营中心 <a class="living">直播中</a></p>
                    <a href="http://www.iermu.com/svideo/2bca5d37797903c0eccb1c589ba58a95/285425">
                        <div class="video-img video-shade">
                            <img src="../assets/img/video_02.png" width='100%' height="200px" alt='运营中心'/>
                        </div>
                    </a>
                </li>
                
            </ul>
        </div>
		</section>
		
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	export default {
		name: 'Info',
		data() {
			return {
				gg: '关于近期注意防范网络电信诈骗犯罪的公告',
				str: "视频监控",
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
	.video_main {
			width: 100vw
		}
		
	.video_main .video_main_video {
		background: #fff;
		margin-bottom: 20px;
		width: 100vw;
		padding: 10px 0;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		box-shadow: 0 0 5px #F5F5F5;
	}
	
	
	
	.video_main .video_main_video p .living {
		float: right;
		color: #00a0e9;
		margin: 10px 0;
		display: none;
	}
	
	.video-shade {
		position: relative;
	}
	
	.video-shade:after {
		position: absolute;
		content: "";
		left: 0;
		top: 0;
		width: 100vw;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		background-image: url(../assets/img/video_btn.png);
		background-position: 48% 50%;
		background-repeat: no-repeat;
		background-size: 20%;
	}
    .active {
        border-top: 1px solid #0790dc !important;
        border-bottom: 1px solid #0790dc !important;
    }
	h4 img{
		height: 100px;
		width: 100vw;
		
	}
	section{
		padding-top:60px ;
	}
</style>