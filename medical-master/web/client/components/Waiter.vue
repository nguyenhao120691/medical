<style>
    #top-waiter{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9999;
    }

    #top-waiter .waiter-inner{
        position: relative;
        height: 2px;
        background: #259dab;
        transition: width .5s;
    }

    #top-waiter .waiter-inner::after {
        content: ' ';
        position: absolute;
        right: 0;
        top: -1px;
        width: 4px;
        height: 4px;
        background: #259dab;
        border-radius: 50%;
    }
</style>

<template>
    <div v-if="show" id="top-waiter">
        <div :class="{'waiter-inner animated fake': true}" :style="{'width': width}"></div>
    </div>
</template>

<script>
    export default {
        computed:{
            show() { return this.$store.state.waiter.show },
            width(){ return '' + this.$store.state.waiter.value + '%' }
        }
    }
</script>

