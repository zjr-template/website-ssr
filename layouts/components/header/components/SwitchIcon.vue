<template>
	<span class="switch-icon" :style="{width: size + 'px', height: size + 'px'}" @click="onSwitch">
		<span class="switch-icon-line" :style="lineStyle(1)"></span>
		<span class="switch-icon-line" :style="{ backgroundColor: color, width: size + 'px', opacity: close ? 0 : 1 }"></span>
		<span class="switch-icon-line" :style="lineStyle(3)"></span>
	</span>
</template>

<script>
export default {
	props: {
		size: {
			type: Number,
			default: 18,
		},
		color: {
			style: String,
			default: "#d6a91b",
		},
	},
	computed: {
		closeLineWidth() {
			return 1.4142 * (this.size - 2);
		},
	},
	data() {
		return {
			close: false,
		};
	},
	methods: {
		onSwitch() {
			this.close = !this.close;

			this.$emit("switch", this.close);
		},
		lineStyle(index) {
			const _style = { backgroundColor: this.color, width: this.size + "px", transform: "rotate(0deg)" };

			if (this.close) {
				_style.width = this.closeLineWidth + "px";
				_style.transform = `rotate(${index === 3 ? "-" : ""}45deg)`;
			}
			return _style;
		},
	},
};
</script>

<style lang="scss">
.switch-icon {
	cursor: pointer;
	position: relative;
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;

	&-line {
		height: 2px;
		transform-origin: 0 center;
		transition: all 300ms ease-out;
		will-change: width, opacity, transform;
	}
}
</style>