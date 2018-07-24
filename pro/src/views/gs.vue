<template>
	<div>
		<div class="mui-scroll-wrapper mui-content">
                    <div class="mui-scroll">
                        <img src="../assets/img/contact_banner.jpg" width="100%"/>
                        <div id="introduce" class="contact-de mt10">
                            <h5>平台介绍</h5>
                            <p>安徽果儿金融信息服务有限公司（下称“果儿金融”）成立于2015年，总部位于安徽合肥，是一家专业从事网络借贷服务的平台。果儿金融（guoer.com）秉承“真实、透明、规范”的运营理念，凭借先进的技术水平、风控实力以及专业管理团队，致力于为广大出借人提供一个透明可靠的投资平台。截至2018年5月31日，果儿金融已帮助18000多家小微企业及个人累计撮合成交额突破20亿，为出借人发放投资收益近3000万。</p>
                            <p>果儿金融作为安徽互联网金融协会首批会员单位，高新技术企业，双软认证企业，一直用实际行动体现“透明”。从举行投资人开放日活动、呼吁筹建“中国互联网金融(P2P)全裸联盟”、联合安徽十大互联网金融平台发布诚信宣言，一直到推出P2P业界首个视频直播平台，果儿金融凭借一系列真诚坦荡的举措，率先走在了行业规范的前列，先后获得“安徽最具实力互联网金融平台”、“网友最喜爱的互联网金融公司”、“年度十大影响力互联网金融平台”。</p>
                            <p>经过两年多的沉淀，果儿金融将进入迅速发展阶段，向更透明、更科技、更智能的综合型互联网金融平台迈进，竭诚为用户提供多元化、个性化的普惠金融服务。</p>
                            <a id="click_more" href="javascript:;">更多</a>
                        </div>
                        <div class="contact-de mt10">
                            <h5>办公环境</h5>
                            <mt-swipe :auto="4000" :class="{'banner_info':true}">
							  <mt-swipe-item>
							  	<img src="../assets/img/2.jpg"/>
							  	<p>公司前台</p>
							  </mt-swipe-item>
							  <mt-swipe-item>
							  	<img src="../assets/img/3.jpg"/>
							  	<p>公司文化墙</p>
							  </mt-swipe-item>
							  <mt-swipe-item>
							  	<img src="../assets/img/4.jpg"/>
							  	<p>员工办公</p>
							  </mt-swipe-item>
							  <mt-swipe-item>
							  	<img src="../assets/img/5.jpg"/>
							  	<p>员工会议</p>
							  </mt-swipe-item>
							  <mt-swipe-item>
							  	<img src="../assets/img/7.jpg"/>
							  	<p>公司一角</p>
							  </mt-swipe-item>
							</mt-swipe>
                        </div>
                        <div class="contact-de mt10 mb20">
                            <h5>联系我们</h5>
                            <div class="mui-content cop-mi">
                                <div class="mui-row">
                                    <div class="mui-col-sm-3 mui-col-xs-3">公司地址：</div>
                                    <div class="mui-col-sm-9 mui-col-xs-9">安徽合肥市高新区望江西路与西二环交口亚夏汽车大厦12F</div>
                                </div>
                                <div class="mui-row">
                                    <div class="mui-col-sm-3 mui-col-xs-3">公司电话：</div>
                                    <div class="mui-col-sm-9 mui-col-xs-9">400-610-6111</div>
                                </div>
                                <div class="mui-row">
                                    <div class="mui-col-sm-3 mui-col-xs-3">公司邮箱：</div>
                                    <div class="mui-col-sm-9 mui-col-xs-9">kf@guoer.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	export default{
		name:"Gs",
		data(){
			return{
				
			}
		},
	}
	
</script>

<style scoped="">
.mt10{margin-top: 10px;}
.mt15{margin-top: 15px;}
.mb20{margin-bottom: 20px;}
.pl30{padding-left: 3rem;}
.contact-de {
    padding: 10px;
    background: #fff;
}

.contact-de h5 {
    border-bottom: 1px solid #ddd;
    color: #000;
    font-size: 17px;
    padding-bottom: 10px;
    border-bottom: 1px solid #c8c7cc;
}
h5{
	font-size: 18px;
	font-weight: bold;
	
}
.contact-de p {
    color: #565656;
    padding-top: 5px;
    line-height: 2rem;
    font-size: 15px;
}
.banner_info{
	height: 250px;
}
.banner_info img{
	height: 250px;
	width: 100vw;
}
.info_pic{
	position: relative;
	
}
.info_pic p{
	position: fixed;
	bottom: 20px;
	left: 100px;
}
</style>