<template>
    <main class="l-main">
        <form :class="['needs-validation', isValidated, 'l-login']" @submit.prevent novalidate>
            <h2 class="mt-4 mb-4 text-center login__title">Login</h2>

            <div class="mb-4 login__question">
                <label for="userName" class="form-label">Nome:</label>
                <input type="text" name="userName" id="userName" :class="['form-control', isValid]"
                    placeholder="Digite seu nome" required>
                <div class="invalid-feedback">
                    Nome ou senha incorreto!
                </div>
            </div>

            <div class="login__question">
                <label for="userPassword" class="form-label">Senha:</label>
                <input type="password" name="userPassword" id="userPassword" :class="['form-control', isValid]"
                    placeholder="Digite sua senha" required>
                <div class="invalid-feedback">
                    Nome ou senha incorreto!
                </div>
            </div>
            <div class="mt-2 d-grid">
                <input type="submit" @click="login($event.target.form)" class="btn login__btn" value="Entrar">
            </div>
        </form>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                validated: false,
                validCredentials: undefined,
            }
        },
        computed: {
            isValidated() {
                return this.validated ? 'was-validated' : ''
            },
            isValid() {
                if (this.validCredentials == undefined) {
                    return ''
                } else if (this.validCredentials == true) {
                    return 'is-valid'
                } else {
                    return 'is-invalid'
                }
            }
        },
        methods: {
            async login(form) {
                let formData = new FormData(form)
                let data = {}

                for (let [name, value] of formData) {
                    data[name] = value ? value : 'x'
                }

                await this.$store.dispatch('authAdminByApi', data)

                if (this.$store.getters.GET_IS_LOGGED) {
                    this.validCredentials = true
                    this.$router.replace({
                        name: 'profile'
                    })
                } else {
                    this.validCredentials = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .l-main {
        height: 100vh;
        background-image: url('/src/assets/img/bg-sand-lg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .l-login {
        width: 18em;
        height: 25em;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        background-color: #fff;
        border-radius: 5px;

        .login__title {
            text-transform: uppercase;
            color: $color-dark-black;
        }

        .login__question {
            width: 90%;
            margin: auto;
        }

        .login__btn {
            width: 85%;
            margin: 1em auto 0;
            background-color: $color-blue-light;
            color: #fff;
            border-radius: 20px;
            font-weight: 600;
        }
    }

    @media (min-width: 762px) {
        .is-box {
            margin: auto 1em 0 1em;
        }
    }
</style>