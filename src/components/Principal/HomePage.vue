<template>
  <Header />
  <main class="main">
        <section class="main__section">
            <div class="main__entries" v-for="item in items" :key="item.id">
                <h3 class="main__title">
                    <span>{{ item.title }}</span>
                    <img :class="item.class" :src="item.image" :alt="item.alt">
                </h3>
                <p class="main__value" :id="item.id"></p>
            </div>
        </section>
        
        <div class="main__new">
            <RouterLink to="/registerProduct">+ Nova transação</RouterLink>
        </div>

        <section class="main__transaction" id="transactions">
            <table class="main__table">
                <thead>
                    <tr class="main__tr">
                        <th class="main__th">Nome</th>
                        <th class="main__th">Data</th>
                        <th class="main__th">Valor</th>
                        <th class="main__th">Descrição</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="main__tbody" data-table></tbody>
            </table>
        </section>
    </main> 
  <Footer />
</template>

<script>
    import customerService from '../../js/service/cliente-service.js'
    import Header from './Header.vue'
    import Footer from './Footer.vue'

    export default {
        name: 'Home',
        components: {
            Header,
            Footer,
            customerService
        },
        data() {
            return {
                items: [
                    {
                        title: 'Entradas', image: 'https://user-images.githubusercontent.com/74377158/191601047-4914f6d7-ba20-4ec8-ae9e-e091c82f2440.svg', alt: 'arrow up', id: 'incomes-label',
                        class: 'main__image'
                    },
                    {
                        title: 'Saídas', image: 'https://user-images.githubusercontent.com/74377158/191600930-da4c9269-7bb9-4305-9335-ddac39d076ea.svg', alt: 'arrow down', id: 'expenses-label',
                        class: 'main__image'
                    },
                    {
                        title: 'Total', image: 'https://user-images.githubusercontent.com/74377158/191601125-5f1559e1-9d34-42a8-a951-576918ad41fe.svg', alt: 'dollar', id: 'total-label',
                        class: 'main__dollar'
                    }
                ],
                creatNewLine(name, date, price, description, id) {
                    const numberFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                    const formatedPrice = numberFormat.format(price)
                    const cssClass = price > 0 ? 'main__incomes-label' : 'main__expenses-label'
                    const newLineCustomer = document.createElement('tr')
                    
                    const content = `
                        <td>${name}</td>
                        <td>${date}</td>
                        <td class="${cssClass}" data-price="${price}">${formatedPrice}</td>
                        <td>${description}</td>
                        <td>
                            <a href="/editProduct?id=${id}">Editar</a>
                        </td>
                        <td id="deleteButton">EXCLUIR</td>
                    `

                    newLineCustomer.innerHTML = content
                    newLineCustomer.dataset.id = id

                    return newLineCustomer
                },
                getDataPrices() {
                    const prices = [...document.querySelectorAll('[data-price]')].map(element => Number(element.getAttribute('data-price')))

                    const incomes = prices.filter(price => price > 0).reduce((a, b) => a + b, 0)
                    const expenses = prices.filter(price => price <= 0).reduce((a, b) => a + b, 0)
                    
                    return {
                        incomes,
                        expenses,
                        total: incomes - (expenses * -1)
                    }
                },
                deleteItens() {
                    const table = document.querySelector('[data-table]')
                    table.addEventListener('click', async (event) => {
                        let deleteButton = event.target.id === 'deleteButton'

                        if (deleteButton) {
                            try {
                                const lineCustomer = event.target.closest('[data-id]')
                                let id = lineCustomer.dataset.id
                                await customerService.removeCustomer(id)
                                lineCustomer.remove()
                            }
                            catch (erro) {
                                window.location.href = '#'
                            }
                        }
                    })
                },
                async render() {
                    try {
                        const table = document.querySelector('[data-table]')
                        const listCustomer = await customerService.customerList()
                        listCustomer.forEach(element => {
                            table.appendChild(this.creatNewLine(element.name, element.date, element.price, element.description, element.id))
                    })
                        const dataPrices = this.getDataPrices()

                        const incomesLabel = document.getElementById('incomes-label')
                        const expensesLabel = document.getElementById('expenses-label')
                        const totalLabel = document.getElementById('total-label')
                        const numberFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

                        incomesLabel.innerHTML = numberFormat.format(dataPrices.incomes)
                        expensesLabel.innerHTML = numberFormat.format(dataPrices.expenses)
                        totalLabel.innerHTML = numberFormat.format(dataPrices.total)
                    }
                    catch (erro) {
                        console.log(erro);
                        window.location.href = '#'
                    }
                }
            }
        },
        mounted() {
            this.creatNewLine(),
            this.getDataPrices(),
            this.deleteItens(),
            this.render()
        }
    }
</script>

<style lang="scss">
    @import '@/assets/style/variables.scss';
    @import '@/assets/style/HomePage.scss'
</style>