<template>
	<el-submenu v-if="hasChild" :index="uuid()" :popper-append-to-body="false">
		<template slot='title'>
			<img v-if="option.imgIcon" class="nva-cell-icon" :src="option.imgIcon" />
			<i v-else-if="option.icon" :class='["nva-cell-icon", option.icon]' />
			<span class="nva-cell-title">{{ option.title }}</span>
		</template>
		<NavCell v-for="(nav, index) in option.child" :option="nav" :key="index"></NavCell>
	</el-submenu>
	<el-menu-item v-else :index="uuid()">
		<img v-if="option.imgIcon" class="nva-cell-icon" :src="option.imgIcon" />
		<i v-else-if="option.icon" :class='["nva-cell-icon", option.icon]' />
		<span class="nva-cell-title">{{ option.title }}</span>
	</el-menu-item>
	<!-- <nuxt-link></nuxt-link> -->
</template>

<script>
export default {
	name: "NavCell",
	props: {
		option: {
			type: Object,
			default() {
				return {
					child: [],
				};
			},
		},
	},
	computed: {
		hasChild() {
			return this.option.child && this.option.child.length;
		},
	},
	methods: {
		uuid() {
			return Math.random().toString(16).slice(2, 8);
		},
	},
};
</script>
<style lang="scss">
.nva-cell-icon {
	width: 1em;
	height: 1em;
}
.el-submenu__title {
	display: flex;
	align-items: center;

	.nva-cell-title {
		flex: 1;
	}
}
</style>
