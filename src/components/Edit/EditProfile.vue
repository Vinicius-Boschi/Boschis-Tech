<template>
    <main class="main">
        <div class="main__welcome">
            <div class="main__welcome-text">
                <h2 class="main__h2">Edite aqui as informações do seu perfil.</h2>
                <img class="main__img" src="https://user-images.githubusercontent.com/74377158/191601589-746a73ce-0909-4acd-bcb0-83e9d84a5beb.svg" alt="logo">
            </div>
            <form action="#" class="main__form">
                <div class="main__form-info">
                    <h2>Editar o perfil</h2>
                    <label class="main__label" for="name">Nome</label>
                    <input class="main__input" type="name" name="name" id="name" placeholder="João Augusto" required>
                </div>
                <div class="main__form-info">
                    <label class="main__label" for="email">Email</label>
                    <input class="main__input" type="email" name="email" id="email" datatipo="email" placeholder="joaoaugusto@email.com" required>
                </div>
                <div class="main__form-info">
                    <label class="main__label" for="password">Senha</label>
                    <input class="main__input" type="password" name="password" id="password" placeholder="******" minlength="6" maxlength="12" onkeyup="strongPassword()" datatipo="password" required>
                    <img class="main__eye" src="https://user-images.githubusercontent.com/74377158/191601813-c523927e-092b-49ac-981d-344d675c0cac.png" id="eye" alt="eye">
                    <div class="main__status" id="status"></div>
                </div>
                <div class="main__form-info">
                    <label class="main__label" for="password">Repita a senha</label>
                    <input class="main__input" type="password" name="password" id="rptpassword" placeholder="******" minlength="6" maxlength="12" onkeyup="passwordEqual()" required>
                    <img class="main__eye" src="https://user-images.githubusercontent.com/74377158/191601813-c523927e-092b-49ac-981d-344d675c0cac.png" id="otherEye" alt="eye">
                    <div class="" id="checkEqual"></div>
                    <Button title="Editar Perfil"/>
                </div>
                <div class="main__already">
                    <span>
                        <p>Voltar ao <a class="main__link" href="#">inicio.</a></p>
                    </span>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
    import Button from '../Edit/Button.vue'

    export default {
        name: 'EditProfile',
        components: {
            Button
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    @import '../assets/style/Form.scss';

    .main {
        &__img {
            width: 100%;
        }
    }

</style>