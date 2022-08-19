<template>
    <main class="l-main">
        <form :class="['needs-validation', isValidated, 'l-login']" @submit.prevent novalidate>
            <h1 class="mt-4 mb-4 text-center login__title">Editar categoria</h1>

            <div class="mb-4 login__question">
                <label for="title" class="h5 form-label">Título para categoria:</label>
                <input type="text" name="title" id="title" :class="['form-control', isValid]"
                    placeholder="Digite o titulo da categoria" :value="category.title" required>

                <div class="invalid-feedback">
                    Título invalido
                </div>
            </div>

            <div class="mb-4 login__question">
                <label for="description" class="h5 form-label">Descrição para categoria:</label>
                <textarea name="description" id="description" :class="['form-control', isValid]"
                    placeholder="Digite a descrição da categoria" :value="category.description" required></textarea>

                <div class="invalid-feedback">
                    Descrição invalida
                </div>
            </div>

            <div class="mb-4 login__question">
                <label for="keywords" class="h5 form-label">Keywords para categoria:</label>
                <input type="text" name="keywords" id="keywords" :class="['form-control', isValid]"
                    placeholder="Digite as keywords" :value="category.keywords" required>

                <div class="invalid-feedback">
                    Keywords invalido
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
                emptyInput: true,
                category: {
                    title: '',
                    description: '',
                    keywords: ''
                }
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
                let data = {}

                for (let [name, value] of formData) {
                    if (value != '') {
                        data[name] = value
                        this.emptyInput = false
                    } else {
                        this.emptyInput = true
                        break
                    }
                }

                if (!this.emptyInput) {
                    await this.$store.dispatch('createCategory', data)

                    if (this.$store.getters.GET_SUCCESS) {
                        this.validCredentials = true
                        this.$router.replace({
                            name: 'profile'
                        })
                    } else {
                        this.validCredentials = false
                        alert('Tentativa de criar categoria fracassada :(')
                    }
                } else {
                    this.validCredentials = false
                }
            }
        },
        async mounted() {
            await this.$store.dispatch('getNoticesByCategoryIdByApi', this.$route.params.categoryId)
            this.category = this.$store.getters.GET_CATEGORY_NOTICES[1].category
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .l-main {
        height: 110vh;
        background-image: url('/src/assets/img/bg-city-lg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .l-login {
        width: 18em;
        height: 36em;
        position: absolute;
        top: 10em;
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
            margin: 0em auto;
            width: 85%;
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