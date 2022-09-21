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
                        link: '#', class: 'fa-solid fa-house', titleList: 'Home'
                    },
                    {
                        link: '#', class: 'fa-solid fa-address-card', titleList: 'Sobre nós'
                    },
                    {
                        link: '#', class: 'fa-regular fa-paper-plane', titleList: 'Serviços'
                    },
                    {
                        link: '#', class: 'fa-solid fa-mobile-screen', titleList: 'Contato'
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
    @import '../assets/style/variables.scss';

    .header {
        background-color: $darkBlue;

        &__nav {
            width: 90vw;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            padding: 1rem;

            @include phone {
                display: block;
            }

            @include notebook {
                display: block;
            }
        }

        &__navContent {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__titleNav {
            color: $green;
            font-size: 1.25rem;
            font-weight: bold;
        }

        &__button {
            display: none;
            background: none;
            border: none;
            color: $green;
            cursor: pointer;
            font-size: 2rem;
            padding: 1rem;

            @include phone {
                display: block;
            }

            @include notebook {
                display: block;
            }
        }

        &__links-container {
            height: auto;
            transition: all .3s linear;

            @include phone {
                height: 0;
                overflow: hidden;
            }

            @include notebook {
                height: 0;
                overflow: hidden;
            }
        }

        &__list {
            display: flex;
            font-size: 1.5rem;
            padding: 2rem;

            @include phone {
                display: block;
                float: left;
            }

            @include notebook {
                display: block;
                float: left;
            }
        }

        &__link {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            position: relative;
            padding: 1rem 1rem;
            font-size: 1rem;
            line-height: 2;
            letter-spacing: .25rem;
            transition: all .3s linear;
            font-weight: bold;
            color: $white;
            
            &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background-color: $green;
                transform: scaleX(0);
                transform-origin: right;
                transition: transform .5s;
            }
            &:hover::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }
    }
</style>