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
