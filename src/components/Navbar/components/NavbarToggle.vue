<template>
    <div class="navbar__menu d-md-none">
        <label for="click" class="menu-btn" @click="changeMenu()">
            <font-awesome-icon :icon="iconMenu" />
        </label>

        <ul :class="['menu__list', stateMenu]">
            <li class="menu__item" @click="changeMenu()">
                <router-link class="is-link nav-link" :to="{name: 'home'}">Home</router-link>
            </li>

            <li v-for="(value, key) in GET_CATEGORIES" :key="key" class="menu__item" @click="changeMenu()">
                <router-link class="is-link nav-link" :to="{name: 'category', params: {category: value.title}}">{{ value.title }}</router-link>
            </li>

            <div v-if="GET_IS_LOGGED" >
                <li class="menu__item" @click="changeMenu()">
                    <router-link class="is-link nav-link" :to="{name: 'profile'}">Perfil</router-link>
                </li>

                <li  class="menu__logout" @click="changeMenu()">
                    <button @click="logout()" class="btn btn-danger">Logout</button>  
                </li>
            </div>
            

            <li v-else class="menu__item" @click="changeMenu()">
                <router-link class="is-link nav-link" :to="{name: 'login'}">Login</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                iconMenu: 'bars',
                currentPage: this.$route.name,
                stateMenu: 'close-menu'
            }
        },
        computed: mapGetters(['GET_CATEGORIES', 'GET_IS_LOGGED']),
        methods: {
            changeMenu() {
                if (this.iconMenu == 'bars') {
                    this.iconMenu = 'xmark'
                    this.stateMenu = 'open-menu'
                } else {
                    this.iconMenu = 'bars'
                    this.stateMenu = 'close-menu'
                }
            },
            async logout() {
                await this.$store.commit('SET_LOGOUT')
                this.$router.replace('/')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .navbar__menu {
        position: absolute;
        left: 1em;
        z-index: 1000;

        .menu-btn {
            font-size: 1.5em;
            color: $color-white;
            cursor: pointer;

            i {
                display: block;
            }
        }

        .menu__list {
            transition: all 0.3s ease;
            position: fixed;
            top: 3em;
            background: $color-dark-black;
            height: 100vh;
            min-width: 20%;
            display: block;
            margin: 0;
            padding: 0;

            .menu__item {
                font-size: 1.1em;
                border-bottom: 1px solid $color-dark-ultra-black;
                
                &:hover {
                    background: $color-dark-light;
                }

                a {
                    padding: .5em 2em .5em .5em;
                    color: $color-white;
                    width: 100%;
                    display: block;

                    &:hover {
                        color: $color-green-light;
                        border-bottom: 1px solid $color-green-light;
                    }
                }

                .router-link-active {
                    color: $color-green-light;
                }
            }

            .menu__logout {
                border-bottom: 1px solid $color-dark-ultra-black;
                

                &:hover {
                    background: $color-dark-light;
                }

                button {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        #click:checked~.menu-btn i:before {
            content: "\f00d";
        }


        .close-menu {
            left: -100%;
        }

        .open-menu {
            left: 0;
        }

        #click:checked~ul li a {
            margin-left: 0;
        }
    }
</style>