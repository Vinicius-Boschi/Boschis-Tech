<template>
    <Header />
    <main class="main">
        <section class="main__section-products">
            <h1 class="main__title">Novo Produto</h1>
            <form action="#" class="main__form" data-form>
                <div class="main__products">
                    <input name="name" type="text" class="main__input" id="name" placeholder="Nome do Produto" required data-name>
                </div>
                <div class="main__products">
                    <input name="price" type="number" class="main__input" id="price" placeholder="Preço do Produto" required data-price>
                    <span class="main__text">Use o sinal - (negativo) para despesas.</span>
                </div>
                <div class="main__products">
                    <input name="description" type="text" class="main__input" id="description" placeholder="Descrição do Produto" required data-description>
                </div>
                <div class="main__products">
                    <input name="date" type="date" class="main__input" id="date" placeholder="Data do Produto" required data-dateBuy>
                </div>
                <Button />
            </form>
        </section>
    </main>
    <Footer />
</template>

<script>
    import customerService from '../js/service/cliente-service.js'
    import Header from './Header.vue'
    import Button from './Buttons/ButtonRegister.vue'
    import Footer from './Footer.vue'
    
    export default {
        name: 'RegisterProduct',
        components: {
            Header,
            Button,
            Footer,
            customerService
        },
        data() {
            return {
                register() {
                    const form = document.querySelector('[data-form]')
                    form.addEventListener('submit', (event) => {
                        event.preventDefault()

                        const name = event.target.querySelector('[data-name]').value
                        const date = event.target.querySelector('[data-dateBuy]').value
                        const price = event.target.querySelector('[data-price]').value
                        const description = event.target.querySelector('[data-description]').value

                        try {
                            customerService.createCustomer(name, date, price, description)
                            .then(() => {
                                window.location.href = '/'
                            })
                        }
                        catch (erro) {
                            window.location.href = '#'
                        }
                    })
                }
            }
        },
        mounted() {
            this.register()
        }
    }

</script>

<style lang="scss">
    @import '../assets/style/variables.scss';
    @import '../assets/style/Products.scss';
</style>