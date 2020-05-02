import Vue from 'vue';
import Button from './Button';
import Icon from "./Icon";

Vue.component('Button', Button);
Vue.component('Icon', Icon);
new Vue({
    el: '#app',
    template: `
        <div>
            <Button >按钮1</Button>
            <Button  icon-name="setting">按钮</Button>
             <Button  icon-name="setting" icon-position="right">按钮</Button>
        </div>
      `,
});