<template>
  <main class="main">
        <div class="main__welcome">
            <div class="main__welcome-text">
                <h1>Bem vindo ao app <span class="underline">Boschi's Tech.</span></h1>
                <h2 class="main__h2">Faça login para aproveitar melhor o aplicativo.</h2>
                <img class="main__img" src="https://user-images.githubusercontent.com/74377158/191601589-746a73ce-0909-4acd-bcb0-83e9d84a5beb.svg" alt="logo">
            </div>
            <form action="#" class="main__form">
                <div class="main__form-info">
                    <h2>Login</h2>
                    <label class="main__label" for="email">Email</label>
                    <input class="main__input" type="email" name="email" id="email" datatipo="email" placeholder="joaoaugusto@email.com" required>
                </div>
                <div class="main__form-info">
                    <label class="main__label" for="password">Senha</label>
                    <input class="main__input" type="password" name="password" id="password" placeholder="******" minlength="6" maxlength="12" v-on:keyup="strongPassword()" datatipo="password" required>
                    <img class="main__eye" src="https://user-images.githubusercontent.com/74377158/191601813-c523927e-092b-49ac-981d-344d675c0cac.png" id="eye" alt="eye">
                    <div class="main__status" id="status"></div>
                    <Button />
                </div>
                <div class="main__already">
                    <span>
                        <a class="main__link" href="#">Esqueci a senha</a>
                    </span>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
    import Button from './Buttons/ButtonLogin.vue'

    export default {
        name: 'Login',
        components: {
            Button
        },
        data() {
            return {
                eyePassword() {
                    let password = document.querySelector("#password")
                    let imgEye = document.querySelector("#eye")
                    let rptpassword = document.querySelector("#rptpassword")
                    let otherEye = document.querySelector("#otherEye")
                    let check = document.querySelector("#checkEqual")

                    imgEye.addEventListener("click", function() {
                        if (password.getAttribute('type') == 'password') {
                            password.setAttribute('type', 'text')
                            imgEye.src = 'https://user-images.githubusercontent.com/74377158/191601811-07f6ae39-e79c-4b77-9810-9354dfcb2b0b.png'
                        } else {
                            password.setAttribute('type', 'password')
                            imgEye.src = 'https://user-images.githubusercontent.com/74377158/191601813-c523927e-092b-49ac-981d-344d675c0cac.png'
                        }
                    })

                    otherEye.addEventListener("click", function() {
                        if (rptpassword.getAttribute('type') == 'password') {
                            rptpassword.setAttribute('type', 'text')
                            otherEye.src = 'https://user-images.githubusercontent.com/74377158/191601811-07f6ae39-e79c-4b77-9810-9354dfcb2b0b.png'
                        } else {
                            rptpassword.setAttribute('type', 'password')
                            otherEye.src = 'https://user-images.githubusercontent.com/74377158/191601813-c523927e-092b-49ac-981d-344d675c0cac.png'
                        }
                    })
                },
                strongPassword() { 
                    let numbers = /([0-9])/
                    let tiny = /([a-z])/
                    let uppercase = /([A-Z])/
                    let diferent = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/

                    if ($('#password').val().length < 6) { 
                        $('#status').html("<p class='weakPassword'>Fraco, insira no mínimo 6 letras</p>")
                    } else {  	
                        if ($('#password').val().match(numbers) && $('#password').val().match(tiny) && $('#password').val().match(uppercase) && $('#password').val().match(diferent)) { 
                            $('#status').html("<p class='strongPassword'>Forte</p>")
                        } else {
                            $('#status').html("<p class='mediumPassword'>Médio</p>")
                        }
                    }
                }
            }
        },
        mounted() {
            this.eyePassword(),
            this.strongPassword()
        }
    }
</script>

<style lang="scss">
    @import '../assets/style/variables.scss';
    @import '../assets/style/Form.scss';

    .weakPassword, .strongPassword, .mediumPassword {
        margin-top: 1rem;
    }

    .weakPassword {
        color: $red;
    }

    .strongPassword {
        color: $darkGreen;
    }

    .mediumPassword {
        color: $orange;
    }

</style>