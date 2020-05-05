import Vue from 'vue';
import App from './app';
import KButton from './button/KButton';
import Icon from "./Icon";
import KButtonGroup from "./button/KButtonGroup";
import KInput from "./input/KInput"
import KRow from "./gird/KRow"
import KCol from "./gird/KCol"
import KHeader from "./layout/KHeader"
import KFooter from "./layout/KFooter"
import KContent from "./layout/KContent"
import KSider from "./layout/KSider"
import KLayout from "./layout/KLayout"
Vue.component('Icon', Icon);
Vue.component('k-button-group', KButtonGroup);
Vue.component('k-button', KButton);
Vue.component('k-input', KInput);
Vue.component('App', App);
Vue.component('k-row',KRow)
Vue.component('k-col',KCol)
Vue.component('k-header',KHeader)
Vue.component('k-footer',KFooter)
Vue.component('k-content',KContent)
Vue.component('k-sider',KSider)
Vue.component('k-layout',KLayout)
Vue.config.productionTip = false
new Vue({
    el:"#app",
  template:`
  <App></App>
  `
})