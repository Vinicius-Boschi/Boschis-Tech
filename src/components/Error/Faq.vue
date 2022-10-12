<template>
    <Header />
    <main class="main">
        <section class="main__section">
            <div class="main__image-section">
                <img src="https://user-images.githubusercontent.com/74377158/195437118-db32a490-68fa-4a5c-b218-9efb80498f5e.png" alt="faq by freepik">
            </div>
            <div class="main__center">
                <article class="main__question">
                    <div class="main__question-title">
                        <p>Do you accept all credit cards?</p>
                        <button class="main__button-question">
                            <span class="main__plus-icon">
                                <i class="far fa-plus-square"></i>
                            </span>
                            <span class="main__minus-icon">
                                <i class="far fa-minus-square"></i>
                            </span>
                        </button>
                    </div>
                    <div class="main__question-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda ratione quod ad itaque sapiente dolores, ducimus sed voluptas eum repellat, minus saepe, similique tempore corrupti iusto doloribus rerum adipisci!
                        </p>
                    </div>
                </article>
            </div>
        </section>
    </main>
</template>

<script>
    import Header from '../Principal/Header.vue';
    
    export default {
        name: "FAQ",
        components: { 
            Header
        },
        data() {
                return {
                    showQuestions() {
                        const questions = document.querySelectorAll(".main__question")
                        
                        questions.forEach((question) => {
                            const btn = question.querySelector(".main__button-question")

                            btn.addEventListener("click", () => {
                                questions.forEach((item) => {
                                    if (item !== question) {
                                        item.classList.remove("show-text")
                                    }
                                })
                                question.classList.toggle("show-text")
                            })
                        })
                    }
                }
            },
        mounted() {
            this.showQuestions()
        }
    }
</script>

<style lang="scss">
    @import '@/assets/style/variables.scss';
    @import '@/assets/style/faq.scss';
</style>