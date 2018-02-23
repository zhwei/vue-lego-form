
import Vue from 'vue'

import VeeValidate, { Validator } from 'vee-validate';
import VeeValidateCN from 'vee-validate/dist/locale/zh_CN'

import LegoText from './text.vue'
import LegoDate from './date.vue'
import LegoSelect from './select.vue'
import LegoAutoComplete from './auto-complete.vue'

Validator.localize('zh_CN', VeeValidateCN);
Vue.use(VeeValidate);

new Vue({
    el: '#content',
    components: {
        LegoText,
        LegoDate,
        LegoSelect,
        LegoAutoComplete,
    },
    data: {
        values: {},
    },
    methods: {
        submit() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    // submit
                    this.$refs.form.submit();
                    return;
                }

                alert('请修正错误项目');
                return;
            })
        },

        modify(name, value) {
            this.values[name] = value;
        }
    }
})
