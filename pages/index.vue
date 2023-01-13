<template>
	<section class="container">
		<!-- banner -->
		<!-- <VBanner :bannerData="bannerData"></VBanner> -->
		<!-- 品牌故事 -->
		<div class="c-t-titleC">
			<h2>品牌故事</h2>
		</div>
		<div class="c-t-titleE">Brand Story</div>
		<div class="c-t-description">爱，一个梦想，一生一世一个家</div>

		<div class="experience-content-top-titleC">
			<h2>体验馆</h2>
		</div>
		<div class="experience-content-top-titleE">Experience Stores</div>
		<div class="experience-content-top-description">我们所有的努力，旨在打造一个宾至如归的理想状态</div>
		<div class="products-content-top-titleC">
			<h2>产品介绍</h2>
		</div>
		<div class="products-content-top-titleE">Products Introduce</div>
		<div class="products-content-top-description">品质生活，爱家有道</div>

		<div class="news-content-top-titleC">
			<h2>新闻资讯</h2>
		</div>
		<div class="news-content-top-titleE">News Center</div>
		<div class="news-content-top-description">一切资讯都是有价值的</div>
	</section>
</template>
<script>
// import axios from "axios";

export default {
	data() {
		return {
			experiencePlace: ["包头", "成都", "南京", "东莞"],
			num: 0,
			clickProdIndex: 0,
			clickNewsIndex: 0,
		};
	},
	// head() {
	// 	return {
	// 		title: this.metaData.navigationTitle,
	// 		meta: [
	// 			{ name: "keywords", hid: "keywords", content: `${this.metaData.navigationKeyword}` },
	// 			{ name: "description", hid: "description", content: `${this.metaData.navigationDescription}` },
	// 		],
	// 	};
	// },
	async asyncData1({ params, store }) {
		//首页head信息
		let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/1`);
		//banner数据动态获取
		let banner = await axios(`${store.state.wordpressAPI}/banner/selectAllByTpye/1`);
		//首页新闻信息
		let indexFirstNewsList1 = await axios(`${store.state.wordpressAPI}/article/getRecommend/1`);
		let indexFirstNewsList2 = await axios(`${store.state.wordpressAPI}/article/getRecommend/2`);
		let indexFirstNewsList3 = await axios(`${store.state.wordpressAPI}/article/getRecommend/3`);
		let indexFirstNewsList4 = await axios(`${store.state.wordpressAPI}/article/getRecommend/4`);
		let indexFirstNewsList5 = await axios(`${store.state.wordpressAPI}/article/getRecommend/5`);

		let indexNewsList1 = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/1/9`);
		let indexNewsList2 = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/2/9`);
		let indexNewsList3 = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/3/9`);
		let indexNewsList4 = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/4/9`);
		let indexNewsList5 = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/5/9`);

		//首页产品展示信息
		let indexProdNav = await axios(`${store.state.wordpressAPI}/proCategory/showFirst`);

		let indexProdList1 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/1`);
		let indexProdList2 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/2`);
		let indexProdList3 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/3`);
		let indexProdList4 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/4`);
		let indexProdList6 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/97`);

		return {
			metaData: metaData.data,
			bannerData: banner.data,
			//首页新闻信息
			indexFirstNewsList1: indexFirstNewsList1.data,
			indexFirstNewsList2: indexFirstNewsList2.data,
			indexFirstNewsList3: indexFirstNewsList3.data,
			indexFirstNewsList4: indexFirstNewsList4.data,
			indexFirstNewsList5: indexFirstNewsList5.data,
			indexNewsList1: indexNewsList1.data,
			indexNewsList2: indexNewsList2.data,
			indexNewsList3: indexNewsList3.data,
			indexNewsList4: indexNewsList4.data,
			indexNewsList5: indexNewsList5.data,
			//首页产品信息
			indexProdNav: indexProdNav.data,
			indexProdList1: indexProdList1.data,
			indexProdList2: indexProdList2.data,
			indexProdList3: indexProdList3.data,
			indexProdList4: indexProdList4.data,
			indexProdList6: indexProdList6.data,
		};
	},
	methods: {
		tab(index) {
			this.num = index;
		},
		getProdList(index) {
			this.clickProdIndex = index;
		},
		getNewsList(index) {
			this.clickNewsIndex = index;
		},
	},
};
</script>

<style scoped>
.container {
	width: 100%;
	height: auto;
}

.title {
	font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

/*index-story*/
div#index-story {
	width: 100%;
	height: auto;
}

.i-s-contant {
	width: 1200px;
	height: auto;
	margin: 0 auto;
}

.s-c-top {
	width: 100%;
	height: auto;
	padding: 162px 0 100px;
	text-align: center;
}

.c-t-titleC {
	width: 100%;
	height: auto;
	font-size: 38px;
	font-family: "Noto Serif CJK SC", "Source Han Serif SC", "Source Han Serif", "source-han-serif-sc", "STZhongsong", "宋体", "serif";
	font-weight: 900;
	color: #22202b;
	line-height: 46px;
}

.c-t-titleE {
	width: 100%;
	height: auto;
	font-size: 14px;
	color: #858585;
	line-height: 22px;
}

.c-t-description {
	width: 100%;
	height: auto;
	font-size: 14px;
	color: #858585;
	line-height: 22px;
}

.s-c-bottom {
	overflow: hidden;
	width: 100%;
	height: auto;
	padding-bottom: 150px;
}

.story-bottom-detalis {
	float: left;
	width: 600px;
	height: auto;
}

.story-bottom-vedios {
	float: right;
	overflow: hidden;
	width: 530px;
	height: 353px;
	cursor: pointer;
}

.bottom-detalis-title {
	overflow: hidden;
	width: 100%;
	height: auto;
	padding-bottom: 45px;
}

.bottom-detalis-titleC {
	position: relative;
	width: 100%;
	height: auto;
	padding: 10px 0 5px;
	color: #22202b;
	font-size: 22px;
	line-height: 24px;
	text-align: left;
}

.bottom-detalis-titleC::after {
	position: absolute;
	top: 50%;
	right: 45px;
	content: "";
	width: 339px;
	height: 2px;
	background: #d5d5d8;
}

.bottom-detalis-titleE {
	width: 320px;
	height: auto;
	color: #cccccc;
	font-size: 12px;
	line-height: 15px;
	text-align: left;
}

.bottom-detalis-content {
	overflow: hidden;
	width: 100%;
	height: auto;
	padding-right: 94px;
	padding-bottom: 60px;
	color: #858585;
	font-size: 14px;
	line-height: 18px;
	text-align: left;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.bottom-detalis-more-box {
	overflow: hidden;
	width: 100%;
	height: auto;
}

.bottom-detalis-more-img {
	float: left;
	overflow: hidden;
	width: 107px;
	height: 78px;
}

.bottom-detalis-more {
	float: left;
	width: 163px;
	height: 40px;
	margin-top: 17px;
	margin-left: 62px;
	border: 3px solid #000;
	font-size: 14px;
	line-height: 40px;
	text-align: center;
	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

.bottom-detalis-more:hover {
	-webkit-transform: translateY(-5px);
	-ms-transform: translateY(-5px);
	-o-transform: translateY(-5px);
	transform: translateY(-5px);
}

.bottom-detalis-more-img img {
	width: 100%;
	height: 100%;
}

.bottom-detalis-more a {
	display: block;
	width: 100%;
	height: 100%;
	color: #22202b;
	font-weight: bold;
	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

.bottom-detalis-more:hover a {
	background: #22202b;
	color: #feeabd;
}
/*index-story*/

/*体验馆*/
div#index-experience {
	width: 100%;
	height: auto;
	background: #f9f9fa;
}

.experience-content {
	width: 1200px;
	height: auto;
	margin: 0 auto;
}

.experience-content-top {
	width: 100%;
	height: auto;
	padding: 140px 0 22px;
	text-align: center;
}

.experience-content-top-titleC {
	width: 100%;
	height: auto;
	font-size: 38px;
	font-family: "Noto Serif CJK SC", "Source Han Serif SC", "Source Han Serif", "source-han-serif-sc", "STZhongsong", "宋体", "serif";
	font-weight: 900;
	color: #22202b;
	line-height: 46px;
}

.experience-content-top-titleE {
	width: 100%;
	height: auto;
	font-size: 14px;
	color: #858585;
	line-height: 22px;
}

.experience-content-top-description {
	width: 100%;
	height: auto;
	padding-top: 6px;
	font-size: 14px;
	color: #858585;
	line-height: 22px;
}

.experience-content-box {
	overflow: hidden;
	width: 100%;
	height: auto;
}

.experience-place-container {
	width: 100%;
	height: auto;
}

.experience-place-ul-box {
	width: 100%;
	text-align: center;
}

ul.experience-place-nav {
	display: inline-block;
	height: auto;
	text-align: center;
}

.experience-place-nav-others {
	display: inline-block;
}

li.experience-place {
	display: inline-block;
	width: 104px;
	height: 40px;
	margin: 0 8px;
	border: 3px solid #000;
	color: #000;
	font-size: 14px;
	line-height: 40px;
	text-align: center;
	cursor: pointer;
	-webkit-transition: all 1s ease;
	-o-transition: all 1s ease;
	transition: all 1s ease;
}

li.experience-place.active {
	color: #feeabd;
	background: #000;
}

li.experience-place:hover {
	color: #feeabd;
	background: #000;
}

.experience-href {
	width: 100%;
	height: auto;
	padding-top: 20px;
	font-size: 14px;
	color: #858585;
	line-height: 22px;
	text-align: center;
}

.experience-href a {
	color: #858585;
}

.experience-href a:hover {
	color: #000;
}

.experience-tab-content {
	overflow: hidden;
	width: 100%;
	height: auto;
	padding: 118px 0 150px;
}

.experience-tab-box {
	overflow: hidden;
	width: 100%;
}

.experience-tab-content .experience-tab-box:first-child {
	display: block;
}

.experience-tab-left {
	float: left;
	width: 600px;
	height: auto;
}

.experience-tab-right {
	float: right;
	width: 600px;
	height: auto;
}

.experience-tab-left-place {
	position: relative;
	overflow: hidden;
	width: 456px;
	padding: 34px 0 0 40px;
	color: #22202b;
	font-size: 14px;
	text-align: left;
	line-height: 30px;
	box-sizing: border-box;
}

.experience-tab-left-place::after {
	position: absolute;
	top: 49px;
	right: 0;
	content: "";
	width: 339px;
	height: 2px;
	background: #d5d5d8;
}

.experience-tab-left-img {
	overflow: hidden;
	width: 515px;
	height: 485px;
	margin-top: -40px;
}

.experience-tab-box-nj .experience-tab-left-img img {
	margin-top: 144px;
}

.tab-right-intro {
	float: left;
	width: 316px;
}

.tab-right-pic {
	float: right;
	width: 284px;
}

.tab-right-intro-title {
	overflow: hidden;
	width: 100%;
	height: auto;
	color: #22202b;
	font-size: 22px;
	font-weight: bold;
	line-height: 24px;
	text-align: left;
}

p.tab-right-intro-title-desc {
	width: 200px;
	height: auto;
	padding-top: 10px;
	padding-bottom: 40px;
	color: #979797;
	font-size: 14px;
	font-weight: normal;
	line-height: 22px;
}

p.tab-right-intro-title-desc-line {
	width: 136px;
	height: 2px;
	background: #d5d5d8;
}

.tab-right-intro-style {
	width: 200px;
	height: auto;
	padding-top: 48px;
	color: #22202b;
	font-size: 14px;
	text-align: left;
	line-height: 18px;
}

p.intro-style-en {
	color: #979797;
	font-size: 14px;
	line-height: 26px;
	padding-bottom: 30px;
}

.tab-right-intro-phone {
	width: 100%;
	height: auto;
	padding-top: 45px;
	padding-bottom: 83px;
}

p.intro-phone-number {
	width: 100%;
	height: 22px;
	color: #22202b;
	font-size: 18px;
	font-weight: bold;
	line-height: 22px;
	text-align: left;
}

p.intro-phone-name {
	width: 100%;
	height: 22px;
	color: #979797;
	font-size: 14px;
	line-height: 22px;
	text-align: left;
}

.tab-right-intro-more {
	width: 163px;
	height: 40px;
	border: 3px solid #000;
	font-size: 14px;
	line-height: 40px;
	text-align: center;
	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

.tab-right-intro-more:hover {
	-webkit-transform: translateY(-5px);
	-ms-transform: translateY(-5px);
	-o-transform: translateY(-5px);
	transform: translateY(-5px);
}

.tab-right-intro-more a {
	display: block;
	width: 100%;
	height: 100%;
	color: #22202b;
	font-weight: bold;
	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

.tab-right-intro-more:hover a {
	background: #22202b;
	color: #feeabd;
}

.right-pic-name-box {
	position: relative;
	overflow: hidden;
	width: 100%;
	padding-left: 60px;
	padding-bottom: 160px;
	box-sizing: border-box;
}

.right-pic-name-box::after {
	position: absolute;
	right: 49.7%;
	bottom: 9px;
	content: "";
	width: 2px;
	height: 135px;
	background: #d5d5d8;
}

.right-pic-name {
	overflow: hidden;
	width: 100%;
	height: auto;
	color: #22202b;
	font-size: 22px;
	font-weight: bold;
	line-height: 24px;
	text-align: left;
}

.right-pic-name-desc {
	width: 100%;
	height: auto;
	padding: 12px 0 24px;
	color: #979797;
	font-size: 14px;
	font-weight: normal;
	line-height: 18px;
}

.tab-right-img {
	display: flex;
	overflow: hidden;
	width: 100%;
	height: 230px;
	text-align: center;
	justify-content: center;
	align-items: center;
}

/*体验馆*/
/* 产品部分 */
div#index-products {
	width: 100%;
	height: auto;
}

.products-content {
	width: 1200px;
	height: auto;
	margin: 0 auto;
}

.products-content-top {
	width: 100%;
	height: auto;
	padding: 140px 0 22px;
	text-align: center;
}

.products-content-top-titleC {
	width: 100%;
	height: auto;
	font-size: 38px;
	font-family: "Noto Serif CJK SC", "Source Han Serif SC", "Source Han Serif", "source-han-serif-sc", "STZhongsong", "宋体", "serif";
	font-weight: 900;
	color: #22202b;
	line-height: 46px;
}

.products-content-top-titleE {
	width: 100%;
	height: auto;
	font-size: 14px;
	color: #858585;
	line-height: 22px;
}

.products-content-top-description {
	width: 100%;
	height: auto;
	padding-top: 6px;
	font-size: 14px;
	color: #858585;
	line-height: 22px;
}

.products-content-box {
	overflow: hidden;
	width: 100%;
	height: auto;
	padding-bottom: 150px;
}

.products-kind-container {
	width: 100%;
	height: auto;
}

ul.products-kind-nav {
	width: 100%;
	height: auto;
	padding-top: 20px;
	text-align: center;
}

li.products-kind {
	display: inline-block;
	height: 46px;
	margin: 0 22px;
	border-bottom: 2px solid transparent;
	color: #979797;
	font-size: 14px;
	line-height: 46px;
	text-align: center;
	cursor: pointer;
	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}
li.products-kind.active,
.products-kind:hover {
	color: #22202b;
	font-weight: bold;
	border-bottom: 2px solid #22202b;
}

.products-tab-content {
	overflow: hidden;
	width: 100%;
	height: auto;
	padding: 126px 0 0;
}

.products-more {
	overflow: hidden;
	width: 163px;
	height: 40px;
	margin: 0 auto;
	border: 3px solid #000;
	font-size: 14px;
	line-height: 40px;
	text-align: center;
	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

.products-more:hover {
	-webkit-transform: translateY(-5px);
	-ms-transform: translateY(-5px);
	-o-transform: translateY(-5px);
	transform: translateY(-5px);
}

.products-more a {
	display: block;
	width: 100%;
	height: 100%;
	color: #22202b;
	font-weight: bold;
	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

.products-more:hover a {
	background: #22202b;
	color: #feeabd;
}
/* 产品部分结束 */
/* 新闻资讯部分 */
div#index-news {
	width: 100%;
	height: auto;
	background: #f9f9fa;
}

.news-content {
	width: 1200px;
	height: auto;
	margin: 0 auto;
}

.news-content-top {
	width: 100%;
	height: auto;
	padding: 140px 0 22px;
	text-align: center;
}

.news-content-top-titleC {
	width: 100%;
	height: auto;
	font-size: 38px;
	font-family: "Noto Serif CJK SC", "Source Han Serif SC", "Source Han Serif", "source-han-serif-sc", "STZhongsong", "宋体", "serif";
	font-weight: 900;
	color: #22202b;
	line-height: 46px;
}

.news-content-top-titleE {
	width: 100%;
	height: auto;
	font-size: 14px;
	color: #858585;
	line-height: 22px;
}

.news-content-top-description {
	width: 100%;
	height: auto;
	padding-top: 6px;
	font-size: 14px;
	color: #858585;
	line-height: 22px;
}

.news-content-box {
	overflow: hidden;
	width: 100%;
	height: auto;
	padding-bottom: 150px;
}

.news-kind-container {
	width: 100%;
	height: auto;
}

ul.news-kind-nav {
	width: 100%;
	height: auto;
	padding-top: 20px;
	text-align: center;
}

li.news-kind {
	display: inline-block;
	height: 46px;
	margin: 0 22px;
	border-bottom: 2px solid transparent;
	color: #979797;
	font-size: 14px;
	line-height: 46px;
	text-align: center;
	cursor: pointer;
	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

li.news-kind.active,
.news-kind:hover {
	color: #22202b;
	font-weight: bold;
	border-bottom: 2px solid #22202b;
}

.news-tab-content {
	overflow: hidden;
	width: 100%;
	height: auto;
	padding-top: 70px;
}

/* 新闻资讯部分结束 */
</style>
