<template>
    <FormGroup :input="this">
        <input
            slot="input"
            type="text"
            class="form-control"
            autocomplete="email"

            :name="name"
            :placeholder="placeholder"
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
        inject: {
            $validator: '$validator'
        },
        components: {
            FormGroup
        },
        props: utils.INPUT_DEFAULT_PROPS,
        data: () => ({
            value: this.initialValue
        })
    };
</script>
