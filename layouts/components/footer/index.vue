<template>
	<footer class="page-footer">
		<div class="page-footer-row">
			<img class="page-footer-icon" src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" />
			备案号：{{recordNum}}
		</div>
		<div class="page-footer-row" style="font-size: 12px">{{copyright}}</div>
	</footer>
</template>

<script>
import settings from "@/config/settings";

export default {
	name: "DefFooter",
	data() {
		return {
			recordNum: settings.recordNum,
			copyright: settings.copyright,
		};
	},
};
</script>

<style lang="scss">
.page-footer {
	padding: 15px 0;
	color: #666;
	font-size: 14px;

	background-color: #f7fbfd;

	&-row {
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 20px;
	}

	&-icon {
		width: 16px;
		height: 16px;
		margin-right: 5px;
	}
}
</style>