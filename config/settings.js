/**
 * 项目配置文件
 */
// 头部菜单配置
const headerNavs = [
    {
        title: "首页",
        url: "/",
        imgIcon: "https://himg.bdimg.com/sys/portraitn/item/public.1.71ffb0e6.KQzGcewoM21oRV82JI5VLg",
    },
    {
        title: "我的工作台",
        url: "/",
        child: [
            {
                title: "待办事项",
                url: "/",
            },
            {
                title: "我的消息",
                url: "/",
                child: [
                    {
                        title: "未读消息",
                        url: "/",
                    },
                    {
                        title: "过期消息",
                        url: "/",
                    },
                ],
            },
        ],
    },
    {
        title: "新闻动态",
        url: "/",
        icon: "el-icon-magic-stick",
    },
    {
        title: "文档中心",
        url: "/",
    },
    {
        title: "帮助中心",
        url: "/",
    },
];

export default {
    // 头部导航菜单
    headerNavs,
    // 头部导航栏logo
    headerLogo: "https://g.alicdn.com/sail-web/maas/0.4.10/static/modelscopeIcon.cd89353f.svg",
    // 网站备案号
    recordNum: "粤B2-20090059",
    // 网站版权声明
    copyright: "Copyright © 1998-2022 Tencent All Rights Reserved.",
};
