<template>
	<div :class="['page-main', config.mobile ? 'mobile' : '']">
		<Header />
		<main class="content-container" ref="container">
			<nuxt />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";

import { isMobile } from "@/utils";

export default {
	name: "default",
	components: { Header, Footer },
	data() {
		return {
			config: {
				mobile: false,
			},
		};
	},
	provide() {
		return {
			config: this.config,
		};
	},
	beforeMount() {
		this.onWindowResize();
		window.addEventListener("resize", this.onWindowResize);
	},
	methods: {
		onWindowResize() {
			this.config.mobile = isMobile();
		},
	},
};
</script>
