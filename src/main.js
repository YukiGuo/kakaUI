import Vue from 'vue';
import App from './app';
import plugin from "./toast/plugin"
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
import KToast from "./toast/KToast"
import KTab from "./tab/KTab"
import KTabHead from "./tab/KTabHead"
import KTabBody from "./tab/KTabBody"
import KTabItem from "./tab/KTabItem"
import KTabPane from "./tab/KTabPane"
import KPopover from "./popover/KPopover"
import KCollapse from "./collapse/KCollapse"
import KCollapseItem from "./collapse/KCollapseItem"
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
Vue.component('k-toast',KToast)
Vue.component('k-tab',KTab)
Vue.component('k-tab-head',KTabHead)
Vue.component('k-tab-body',KTabBody)
Vue.component('k-tab-item',KTabItem)
Vue.component('k-tab-pane',KTabPane)
Vue.component('k-popover',KPopover)
Vue.component('k-collapse',KCollapse)
Vue.component('k-collapse-item',KCollapseItem)
Vue.use(plugin)
Vue.config.productionTip = false
new Vue({
    el:"#app",
  template:`
  <App></App>
  `
})