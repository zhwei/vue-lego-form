<template>
    <div :class="{
            'form-group': true,
            'has-error': error,
        }"
    >
        <label class="control-label col-sm-2">
            <span v-show="input.isRequired" class="text-danger">*</span>

            {{ input.label }}
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
    export default {
        props: {
            input: null,
        },
        computed: {
            error: function () {
                return this.input.errors.has(this.input.name) ? this.input.errors.first(this.input.name) : false;
            },
        }
    };
</script>
