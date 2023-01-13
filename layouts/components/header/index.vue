<template>
	<div :style="{ height: height + 'px', position: 'relative' }">
		<header class="header" v-if="config.mobile" :style="{ height: height + 'px' }">
			<img class="header-logo" :src="logo" :style="{ height: height / 2 + 'px' }">
			<SwitchIcon @switch="mobileNavVisible = !mobileNavVisible"></SwitchIcon>
			<el-collapse-transition>
				<el-menu class="header-nva-mobile" v-if="mobileNavVisible">
					<NavCell v-for="(nav, index) in navs" :option="nav" :key="index"></NavCell>
				</el-menu>
			</el-collapse-transition>
		</header>
		<header v-else class="header" :style="{ height: height + 'px' }">
			<img class="header-logo" :src="logo" :style="{ height: height / 2 + 'px' }">
			<el-menu mode="horizontal">
				<NavCell v-for="(nav, index) in navs" :option="nav" :key="index"></NavCell>
			</el-menu>
		</header>
	</div>
</template>

<script>
import settings from "@/config/settings";
import NavCell from "./components/NavCell";
import SwitchIcon from "./components/SwitchIcon";

export default {
	name: "HeaderMain",
	inject: ["config"],
	components: { NavCell, SwitchIcon },
	props: {
		height: {
			type: Number,
			default: 60,
		},
	},
	data() {
		return {
			logo: settings.headerLogo,
			navs: settings.headerNavs,
			mobileNavVisible: false,
			show: false,
		};
	},
	methods: {},
};
</script>

<style lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99;
	display: flex;
	align-items: center;
	padding: 0 15%;
	background-color: #fff;
	justify-content: space-between;

	&-nva {
		&-mobile {
			position: absolute;
			left: 0;
			right: 0;
			top: 100%;
			box-shadow: 0 8px 10px 0 rgb(0 0 0 / 10%);

			.el-menu-item,
			.el-submenu__title {
				height: 44px;
				line-height: 44px;
			}
		}
	}
	.el-menu--horizontal,
	.el-submenu__title,
	.el-menu-item {
		border-bottom: none !important;
	}
}

.mobile {
	.header {
		padding: 0 15px;
	}
}
</style>