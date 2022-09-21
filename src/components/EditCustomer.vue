<template>
  <Header />
    <main class="main">
        <section class="main__section-products">
            <h1 class="main__title">Editar produto</h1>
            <form action="#" class="main__form" data-form>
                <div class="main__products">
                    <input name="name" type="text" class="main__input" id="name" placeholder="Nome do Produto" data-thousands="." data-decimal="," data-prefix="R$ " required data-name>
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
                <ButtonProduct />
            </form>
        </section>
    </main>
    <Footer />
</template>

<script>
    import customerService from '../js/service/cliente-service.js'
    import Header from './Header.vue'
    import ButtonProduct from './Buttons/ButtonEditProduct.vue'
    import Footer from './Footer.vue'

    export default {
        name: 'EditCustomer',
        components: {
            Header,
            ButtonProduct,
            Footer,
            customerService
        },
        data() {
            return {
                async Update() {
                    const catchURL = new URL(window.location)
                    const id = catchURL.searchParams.get('id')

                    const inputName = document.querySelector('[data-name]')
                    const inputDateBuy = document.querySelector('[data-dateBuy]')
                    const inputPrice = document.querySelector('[data-price]')
                    const inputDescription = document.querySelector('[data-description]')

                    try {
                        const data = await customerService.editCustomer(id)
                        inputName.value = data.name
                        inputDateBuy.value = data.dateBuy
                        inputPrice.value = data.price
                        inputDescription.value = data.description
                    }
                    catch (erro) {
                        window.location.href = '#'
                    }

                    const form = document.querySelector('[data-form]')
                    
                    form.addEventListener('submit', async (event) => {
                        event.preventDefault()
                        try {
                            await customerService.updateCustomer(id, inputName.value, inputDateBuy.value, inputPrice.value, inputDescription.value)
                            window.location.href = "/"
                        }
                        catch (erro) {
                            window.location.href = '#'
                        }
                    })  
                }
            }
        },
        mounted() {
            this.Update()
        }
    }
</script>

<style lang="scss">
    @import '../assets/style/variables.scss';
    @import '../assets/style/Products.scss';
</style>