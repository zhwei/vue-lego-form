
import Vue from 'vue'

import FormGroup from './form-group.vue'


export default Vue.extend({
    inject: {
        $validator: '$validator'
    },

    components: {
        FormGroup
    },

    props: {
        // input name
        name: {
            type: [String, Number],
            required: true
        },

        // 输入框前面的标签文本
        label: [String, Number],

        // 默认值
        initialValue: "",

        // input placeholder
        placeholder: String,

        required: {
            type: Boolean,
            default: false,
        },

        // 内置 Validation
        validator: {
            type: [String, Object],
            default: ''
        },
    },

    data: () => ({
        value: this.initialValue
    }),

    computed: {

        isRequired() {
            return this.required || this.hasRule('required');
        },

    },

    methods: {

        hasRule: function (target) {
            if (typeof this.validator === 'string') {
                return this.validator.indexOf(target) !== -1;
            }

            if (typeof this.validator === 'object') {
                return target in this.validator;
            }

            return false;
        },

    },
});
