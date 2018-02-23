<template>
    <FormGroup :input="this">
        <select
            slot="input"
            class="form-control"

            :name="name"
            :placeholder="placeholder"
            :data-vv-as="label"

            v-validate="validator"
            v-model="value"
        >
            <option
                v-if="placeholder"
                value=""
                disabled
                selected
            >** {{ placeholder }} **</option>

            <option
                v-for="option in options"
                :value="option.value"
                :key="option.value + option.label"
            >{{ option.label }}</option>
        </select>
    </FormGroup>
</template>

<script>
    import Field from './field'

    export default Field.extend({
        props: {
            options: {
                type: Array,
                default: [],
            },
        },
    });
</script>
