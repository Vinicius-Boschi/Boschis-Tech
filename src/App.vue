<template>
    <RouterView />
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    @import './assets/style/variables.scss';

    body {
        background-color: $green;
    }

    #app {
        font-family: $fontNotoSans;
    }
  
</style>
