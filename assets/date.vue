<template>
    <FormGroup :input="this">
        <datepicker
            slot="input"
            format='yyyy-MM-dd'
            language="zh"
            input-class="form-control"

            :clear-button="true"
            :name="name"
            :placeholder="placeholder"
            :data-vv-as="label"

            v-validate="validator"
            v-model="value"

        ></datepicker>
    </FormGroup>
</template>

<script>
    import Field from './field'
    import Datepicker from 'vuejs-datepicker';

    export default {
        extends: Field,
        components: {
            Datepicker,
        },
    };
</script>
