<template>
    <FormGroup :label="label" :error="errors.has(name) ? errors.first(name) : false">
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
        })
    };
</script>
