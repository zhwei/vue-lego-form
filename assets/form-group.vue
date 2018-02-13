<template>
    <div :class="{
            'form-group': true,
            'has-error': hasError
        }"
    >
        <label class="control-label col-sm-2">{{ label }}</label>

        <div class="col-md-10">

            <slot name="input"></slot>

            <span v-show="hasError" class="text-danger">
                {{ error }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'name',
            'label',
            'error'
        ],
        computed: {
            hasError: () => this.error !== null
        }
    };
</script>
