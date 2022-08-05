<template>
    <main class="l-main">
        <form :class="['needs-validation', isValidated, 'l-login']" @submit.prevent novalidate>
            <h1 class="mt-4 mb-4 text-center login__title">Editar a categoria</h1>

            <div class="mb-4 login__question">
                <label for="title" class="form-label">Novo título para categoria:</label>
                <input type="text" name="title" id="title" :class="['form-control', isValid]" placeholder="Digite seu nome"
                     :value="$route.params.categoryTitle" required>

                <div class="invalid-feedback">
                    Título invalido
                </div>
            </div>

            <div class="mt-2 d-grid">
                <input type="submit" @click="editCategory($event.target.form)" class="btn login__btn" value="Editar">
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
            async editCategory(form) {
                let formData = new FormData(form)
                let data = { categoryId: this.$route.params.categoryId }

                for (let [name, value] of formData) {
                    data[name] = value ? value : ''
                }

                await this.$store.dispatch('editCategory', data)

                this.$router.replace({ name: 'profile' })
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
        width: 17em;
        height: 20.5em;
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