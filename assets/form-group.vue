<template>
    <div :class="{
            'form-group': true,
            'has-error': error
        }"
    >
        <label class="control-label col-sm-2">
            <span v-show="required" class="text-danger">*</span>

            {{ label }}
        </label>

        <div class="col-md-10">

            <slot name="input"></slot>

            <span v-show="error" class="text-danger">
                {{ error }}
            </span>
        </div>
    </div>
</template>

<script>
    import utils from './utils'

    export default {
        props: {
            name: utils.PROP_NAME,
            required: utils.PROP_REQUIRED,
            label: null,
            error: null,
        }
    };
</script>
