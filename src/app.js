import Vue from 'vue';
import KButton from './KButton';
import Icon from "./Icon";
import KButtonGroup from "./KButtonGroup";

Vue.component('k-button', KButton);
Vue.component('Icon', Icon);
Vue.component('k-button-group',KButtonGroup);

new Vue({
    el: '#app',
    template: `
        <div>
            <k-button :loading="loading1" @click="loading1=!loading1">按钮1</k-button>
            <k-button  icon-name="setting">按钮</k-button>
             <k-button  :loading="loading2" @click="loading2=!loading2"  icon-name="setting" icon-position="right">按钮</k-button>
        <k-button-group>
            <k-button icon-name="left">向左</k-button>
            <k-button >其它</k-button>
            <k-button icon-name="right">向右</k-button>
        </k-button-group>
        
        </div>
      `,
    data:{
        loading1:false,
        loading2:false
    }
});