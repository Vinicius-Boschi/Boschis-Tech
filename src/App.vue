<template>
    <RouterView />
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;500;700&display=swap');
    @import './assets/style/variables.scss';

    body {
        background-color: $green;
    }

    #app {
        font-family: 'Noto Sans', sans-serif;
    }
  
</style>
