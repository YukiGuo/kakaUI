import Vue from 'vue';
import App from './app';
import KButton from './button/KButton';
import Icon from "./Icon";
import KButtonGroup from "./button/KButtonGroup";
import KInput from "./input/KInput"
Vue.component('Icon', Icon);
Vue.component('k-button-group', KButtonGroup);
Vue.component('k-button', KButton);
Vue.component('k-input', KInput);
Vue.component('App', App);
Vue.config.productionTip = false
new Vue({
    el:"#app",
  template:`
  <App></App>
  `
})