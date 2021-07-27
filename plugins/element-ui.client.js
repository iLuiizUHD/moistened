import Vue from "vue";
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/pt-br";
import "element-ui/lib/theme-chalk/index.css";

export default () => {
	Vue.use(Element, { locale });
};
