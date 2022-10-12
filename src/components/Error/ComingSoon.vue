<template>
    <header class="header">
        <div class="header__text">
            <h1 class="header__title">{{ title }}</h1>
        </div>
        <div class="header__media">
            <span class="header__follow">{{ followTitle }}</span>
            <ul class="header__social">
                <li v-for="item in list" :key="item.id">
                    <a :href="item.link" target="_blank">
                        <i :class="item.class"></i>
                    </a>
                </li>
            </ul>
        </div>
    </header>
    <main class="main">
        <div class="main__image">
            <img :src="img" :alt="alt">
        </div>
    </main>

    <footer class="footer">
        <div class="footer__content">
            <h1 class="footer__text"> {{ text }} </h1>
            <span class="footer__subtitle"> {{ subtitle }} </span>
            <p class="footer__paragraph"> {{ paragraph }} </p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Coming Soon',
        data() {
            return {
                title: "Boschi's Tech", followTitle: 'Siga a gente',
                img: 'https://user-images.githubusercontent.com/74377158/195408498-a16bdd3b-959b-4ce2-b9df-370cae350131.png', alt: 'astronaut by freepik',
                text: 'Desenvolvedores trabalhando!', subtitle: '- Em Breve -',
                paragraph: ' Olá Financeiros! Nós estamos correndo para poder concluir o site o mais rápido possível, assim que possível tudo estará funcionando.',
                list: [
                    { link: '#', class: 'fa-brands fa-instagram'}, 
                    { link: 'https://github.com/Vinicius-Boschi/Boschis-Tech', class: 'fa-brands fa-github'}
                ]
            }
        }
    }
</script>

<style lang="scss" >
    @import '@/assets/style/variables.scss';
    @import '@/assets/style/ComingSoon.scss';
</style>