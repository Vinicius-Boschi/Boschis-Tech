<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__infos">
                <div class="footer__media">
                    <h4 class="footer__title">Companhia</h4>
                    <ul>
                        <li v-for="item in links" :key="item.id">
                            <a :href="item.link" class="footer__link">{{ item.title }}</a>
                        </li>
                      </ul>
                </div>
                <div class="footer__media">
                    <h4 class="footer__title">Ajuda</h4>
                    <ul>
                      <li>
                          <a href="#" class="footer__link">FAQ</a>
                      </li>
                    </ul>
                </div>
                <div class="footer__media">
                    <h4 class="footer__title">Siga a Gente</h4>
                    <div>
                        <a class="footer__social-media" href="#">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a class="footer__social-media" href="#">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                <div class="footer__media">
                    <h4 class="footer__title">Contate nos</h4>
                    <a class="footer__social-media" href="#">
                        <i class="fa-solid fa-envelope-open"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                links: [
                    {
                        link: '#', title: 'Sobre Nós'
                    },
                    {
                        link: '#', title: 'Serviços'
                    },
                    {
                        link: '#', title: 'Produtos'
                    },
                    {
                        link: '#', title: 'Nossos Serviços'
                    },
                    {
                        link: '#', title: 'Política de Privacidade'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/style/variables.scss';    
    
    .footer {
        background: $darkBlue;
        padding: 2rem;

        &__content {
            max-width: 72rem;
            margin: 0 auto;
        }

        &__infos {
            display: flex;

            @include phone {
                flex-wrap: wrap;
            }
        }

        &__media {
            width: 25%;
            padding: 1rem;

            @include phone {
                width: 100%;
                margin-bottom: 1.75rem;
            }

            @include notebook {
                margin-bottom: 1.75rem;
            }
        }

        &__title {
            font-size: 1.1rem;
            color: $white;
            margin-bottom: 2rem;
            font-weight: 500;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                bottom: -.625rem;
                background: $green;
                height: .125rem;
                box-sizing: border-box;
                width: 3rem;
            }
        }

        &__link {
            font-size: 1rem;
            font-weight: 300;
            color: $gray;
            transition: all 1s linear;
            text-decoration: none;
            line-height: 2;

            &:hover {
                color: $white;
                padding-left: .5rem;
            }

            &::after {
                box-shadow: 0 0 0 3px #FFFFFF;
            }

            &:hover::after {
                opacity: 1;
                transform: scale(1.15);
            }
        }

        &__social-media {
            font-size: 1.5rem;
            text-align: center;
            display: inline-block;
            cursor: pointer;
            margin: 1rem 1rem 0 0;
            width: 3rem;
            height: 3rem;
            line-height: 2;
            position: relative;
            background-color: $transparent;
            color: $white;
            border-radius: 50%;

            &:hover {
                background-color: $white;
                color: $darkBlue;
            }

            &::after {
                pointer-events: none;
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                content: '';
                box-sizing: content-box;
                box-shadow: 0 0 0 3px $white;
                top: 0;
                left: 0;
                opacity: 0;
                transition: 500ms;
            }

            &:hover::after {
                opacity: 1;
                transform: scale(1.15);
            }
        }
    }

</style>