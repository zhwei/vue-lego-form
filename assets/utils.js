export default {

    PROP_NAME: {
        type: [String, Number],
        required: true
    },

    PROP_REQUIRED: {
        type: Boolean,
        default: false
    },

    PROP_VALIDATOR: {
        type: [String, Object],
        default: ''
    },

    INPUT_DEFAULT_PROPS: {
        name: this.PROP_NAME,
        label: [String, Number],
        initialValue: null,
        placeholder: String,

        // 内置 Validation
        validator: this.PROP_VALIDATOR,
    },

    hasRule: function (rules, target) {
        if (typeof rules === 'string') {
            return rules.indexOf(target) !== -1;
        }

        if (typeof rules === 'object') {
            return target in rules;
        }

        return false;
    },
};
