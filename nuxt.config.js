export default {
    // https://go.nuxtjs.dev/config-head
    head: {
        title: "website-template",
        htmlAttrs: {
            lang: "zh-CN",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["element-ui/lib/theme-chalk/index.css", "@/assets/css/reset.css"],
    styleResources: {
        scss: "./assets/resource.scss",
    },
    // https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            ssr: true,
            src: "@/plugins/element-ui",
        },
    ],
    // https://go.nuxtjs.dev/config-components
    // components: [],
    // https://go.nuxtjs.dev/config-modules
    modules: [],
    // https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxtjs/style-resources"],
    server: {
        port: 3000,
        host: "localhost",
        timing: false,
    },
    router: {
        base: "/dist/",
    },
    cache: true,
};
