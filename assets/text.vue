<template>
    <FormGroup :label="label" :error="lastError">
        <input
            slot="input"
            type="text"
            class="form-control"
            v-validate="'required|email'"
            v-model="value"
            :name="name"
            :placeholder="placeholder"
        />
    </FormGroup>
</template>

<script>
    import FormGroup from './form-group.vue'

    export default {
        components: {
            FormGroup
        },
        props: [
            'label',
            'name',
            'initialValue',
            'placeholder'
        ],
        data: () => ({
            value: this.initialValue
        }),
        computed: {
            lastError: () => this.errors && this.errors.has(name) ? this.errors.first(name) : false
        }
    };
</script>
