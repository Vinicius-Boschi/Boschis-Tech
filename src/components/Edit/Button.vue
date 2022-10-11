<template>
    <div class="main__button">
        <button class="main__effect effect-2" type="submit" :title="title">{{ title }}</button>
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: ['title']
    }
</script>

<style lang="scss">
    @import '@/assets/style/variables.scss';
    @import '@/assets/style/Buttons.scss';
</style>