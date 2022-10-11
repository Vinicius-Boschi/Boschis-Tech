<template>
  <header class="header">
    <div>
        <nav class="header__nav" role="navigation">
            <div class="header__navContent">
                <h1 class="header__titleNav">{{ titleNav }}</h1>
                <button class="header__button">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <div class="header__links-container">
                <ul class="header__list">
                    <li v-for="item in items" :key="item.id">
                        <a :href="item.link" class="header__link">
                            <i :class="item.class"></i>
                            <span class="header__titleList">{{ item.titleList }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                titleNav: "Boschi's Tech",
                items: [
                    {
                        link: '/', class: 'fa-solid fa-house', titleList: 'Home'
                    },
                    {
                        link: '/comingsoon', class: 'fa-solid fa-address-card', titleList: 'Sobre nós'
                    },
                    {
                        link: '/comingsoon', class: 'fa-regular fa-paper-plane', titleList: 'Serviços'
                    },
                    {
                        link: '/comingsoon', class: 'fa-solid fa-mobile-screen', titleList: 'Contato'
                    }
                ]
            }
        },
        methods: {
            Navbar() {
                const button = document.querySelector(".header__button")
                const container = document.querySelector(".header__links-container")
                const list = document.querySelector(".header__list")

                button.addEventListener("click", () => {
                    const height = container.getBoundingClientRect().height
                    const linksHeight = list.getBoundingClientRect().height
                
                    if (height === 0) {
                        container.style.height = `${linksHeight}px`
                    } else {
                        container.style.height = 0
                    }
                })
            }
        },
        mounted() {
            this.Navbar()
        }
    }
</script>

<style lang="scss">
    @import '@/assets/style/variables.scss';
    @import '@/assets/style/header.scss';
</style>