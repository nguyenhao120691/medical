<template>
    <div :class="classNames" >
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            type: {
                type: String,
                default: 'info'
            },
            class: String
        },
        computed: {
            classNames() {return `alert alert-${this.type} ${this.class}`}
        }
    }
</script>

<style>
    .alert.alert-warning.contrast{
        background-color: rgb(250, 238, 134);
        border-color: transparent;
        color: #292d38;
    }
</style>