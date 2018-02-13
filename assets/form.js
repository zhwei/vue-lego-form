
import Vue from 'vue'
import LegoText from './text.vue'
import VeeValidate, { Validator } from 'vee-validate';
import VeeValidateCN from 'vee-validate/dist/locale/zh_CN'

Validator.localize('zh_CN', VeeValidateCN);
Vue.use(VeeValidate);

new Vue({
    el: '#content',
    components: {
        LegoText
    }
})
