<template>
    <main class="main">
        <div class="main__welcome">
            <div class="main__welcome-text">
                <h2 class="main__h2">Insira seu email para podermos te enviar o link para a recuperação da senha.</h2>
                <img class="main__img" src="https://user-images.githubusercontent.com/74377158/191601589-746a73ce-0909-4acd-bcb0-83e9d84a5beb.svg" alt="logo">
            </div>
            <form action="#" class="main__form">
                <div class="main__form-info">
                    <h2>Recupere a senha</h2>
                    <label class="main__label" for="email">Email</label>
                    <input class="main__input" type="email" name="email" id="email" datatipo="email" placeholder="joaoaugusto@email.com" required>
                </div>
                <div class="main__form-info">
                    <label class="main__label" for="password">Senha</label>
                    <input class="main__input" type="password" name="password" id="password" placeholder="******" minlength="6" maxlength="12" onkeyup="strongPassword()" datatipo="password" required>
                    <img class="main__eye" src="https://user-images.githubusercontent.com/74377158/191601813-c523927e-092b-49ac-981d-344d675c0cac.png" id="eye" alt="eye">
                    <div class="main__status" id="status"></div>
                    <Button title="Recuperar" />
                </div>
            </form>
        </div>
    </main>
</template>

<script>
    import Button from '../Edit/Button.vue'

    export default {
        name: 'ForgotPassword',
        components: {
            Button
        }
    }
</script>

<style lang="scss">
    @import '../assets/style/variables.scss';
    @import '../assets/style/Form.scss';
</style>