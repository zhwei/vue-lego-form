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
    import Field from './field'

    export default {
        extends: Field
    };
</script>
