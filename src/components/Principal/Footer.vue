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
    @import '@/assets/style/variables.scss';    
    @import '@/assets/style/Footer.scss';
</style>