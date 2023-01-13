import Vue from "vue";

// 全局引入
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/zh-CN";
Vue.use(Element, { locale });

// 按需引入
import { Menu, MenuItem, Submenu, CollapseTransition as ExpandTransition } from "element-ui";

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(ExpandTransition);
