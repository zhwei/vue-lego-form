<template>
    <FormGroup
        :name="name"
        :label="label"
        :error="errors.has(name) ? errors.first(name) : false"
        :required="required"
    >

        <input
            slot="input"
            type="text"
            :name="name"
            :placeholder="placeholder"

            class="form-control"

            :data-vv-as="label"
            v-validate="validator"
            v-model="value"
        />
    </FormGroup>
</template>

<script>
    import FormGroup from './form-group.vue'
    import utils from './utils'

    export default {
        components: {
            FormGroup
        },
        props: {
            name: utils.PROP_NAME,
            label: [String, Number],
            initialValue: null,
            placeholder: String,

            // 内置 Validation
            validator: utils.PROP_VALIDATOR,
        },
        data: () => ({
            value: this.initialValue
        }),
        computed: {
            required: function () {
                return utils.hasRule(this.validator, 'required')
            },
        }
    };
</script>
