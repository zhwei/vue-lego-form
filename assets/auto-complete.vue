<template>
    <FormGroup :input="this">
        <div slot="input">
            <v-select
                :name="name"
                :options="options"
                :data-vv-as="label"
                :placeholder="placeholder"
                :filterable="false"

                v-model="selected"
                v-validate="validator"


                @search="onSearch"
                @search:focus="onFocus"
            >
                <template slot="option" slot-scope="option">
                    <span>{{ option.label }}</span>
                </template>

                <template slot="selected-option" slot-scope="option">
                    <span>{{ option.label }}</span>
                </template>

                <span slot="no-options">找不到符合的选项.</span>
            </v-select>

            <!--  vSelect 不带 input 标签，所以自己加了个  -->
            <input type="hidden" :name="name" :value="value">
        </div>
    </FormGroup>
</template>

<script>
    import Field from './field'
    import vSelect from 'vue-select'
    import _ from 'underscore'
    import axios from 'axios'

    export default {
        extends: Field,
        components: {
            vSelect,
        },
        props: {
            remote: {
                type: String,
                default: "https://gist.githubusercontent.com/zhwei/e15caac74747da95347185225a12a991/raw/d0cbc2e7b5fe1eab3f7e393d820ffec3884ee364/gistfile1.txt"
            }
        },
        data: () => ({
            selected: null,
            options: [],
        }),
        watch: {
            selected: function (newOption) {
                if (newOption) {
                    this.value = newOption.value;
                }
            }
        },
        methods: {
            onFocus() {
            },

            onSearch(search, loading) {
                loading(true);
                this.search(loading, search, this);
                console.log('here')
            },

            search: _.debounce(
                (loading, search, vm) => {
                    let url = vm.remote + '?q=' + escape(search);
                    axios.get(url)
                        .then(response => {
                            vm.options = response.data;
                            loading(false);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                },
                350
            )
        },
    };
</script>
