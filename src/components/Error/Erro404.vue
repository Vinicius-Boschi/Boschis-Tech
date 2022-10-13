<template>
    <Header />
    <main class="main">
        <div class="main__img">
            <img src="https://user-images.githubusercontent.com/74377158/195664458-24f022ea-b64f-48eb-a833-9c80f3d840b0.jpg" alt="">
        </div>
    </main>
</template>

<script>
    import Header from '../Principal/Header.vue'
    
    export default {
    components: {
        Header
    }
}
</script>

<style lang="scss">
    @import '@/assets/style/variables.scss';

    body {
        background: #E1F5FE;
    }

    .main {

        &__img {
            text-align: center;
            margin-top: 3rem;

            img {
                width: 35%;
            }
        }
    }

</style>