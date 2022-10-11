<template>
    <main class="main">
        <section class="main__infos">
            <div class="main__logo">
                <h1 class="main__title">Boschi's Tech</h1>
            </div>
            <div class="main__content">
                <h2 class="main__title-content">We're Coming Soon</h2>
                <p class="main__text">Hello fellow shoppers! We're currently building our new fashion store.</p>
            </div>
        </section>
        <div class="main__picture">
            <img src="https://user-images.githubusercontent.com/74377158/191601589-746a73ce-0909-4acd-bcb0-83e9d84a5beb.svg" alt="">
        </div>
    </main>
</template>

<script>
    export default {
        name: 'Coming Soon'
    }
</script>

<style lang="scss">
    @import '@/assets/style/variables.scss';

    .main {
        font-family: $fontJosefin;
    }

</style>