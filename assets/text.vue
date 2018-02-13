<template>
    <FormGroup :input="this">
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
        props: utils.INPUT_DEFAULT_PROPS,
        data: () => ({
            value: this.initialValue
        })
    };
</script>
