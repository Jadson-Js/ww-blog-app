<template>
    <article class="d-flex justify-content-between catalog__notice">
        <div class="d-flex">
            <img loading="lazy" :src="notice.ImageUrl" :alt="notice.alt"
                class="img-fluid me-2 is-linkImg  catalog__img">

            <div class="d-flex flex-column catalog__content">
                <h2 class="h6 mb-0">{{ notice.title }}</h2>
                <span class="is-new__time">{{ time_ago_in_words_with_parsing(notice.updatedAt) }}</span>
            </div>
        </div>

        <div class="catalog__content">
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="dropdown-toggle catalog__control" type="button"
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><router-link class="dropdown-item" :to="{ name: 'editNotice', params: { noticeId: notice.id, noticeTitle: notice.title }}">Editar</router-link></li>
                <li class="dropdown-item" @click="deleteNotice(notice.id)">Deletar</li>
            </ul>
        </div>
    </article>
</template>

<script>
    export default {
        props: ['notice'],
        data() {
            return {
                category: 'aguarde...'
            }
        },
        methods: {
            async deleteNotice(id) {
                if (confirm('Deseja apagar esta noticia?') ) {
                    await this.$store.dispatch('deleteNotice', id)

                    await this.$store.commit('SET_RESET')
                    await this.$store.dispatch('getAllNotices')
                }
            },  
            time_ago_in_words_with_parsing(from) {
                var date = new Date;
                date.setTime(Date.parse(from));
                return this.time_ago_in_words(date);
            },
            time_ago_in_words(from) {
                return this.distance_of_time_in_words(new Date, from);
            },
            distance_of_time_in_words: function (to, from) {
                var distance_in_seconds = ((to - from) / 1000);
                var distance_in_minutes = Math.floor(distance_in_seconds / 60);
                var tense = distance_in_seconds < 0 ? "A partir de agora " : "Há ";
                distance_in_minutes = Math.abs(distance_in_minutes);
                if (distance_in_minutes == 0) {
                    return tense + 'menos de um minuto';
                }
                if (distance_in_minutes == 1) {
                    return tense + 'um minuto';
                }
                if (distance_in_minutes < 45) {
                    return tense + distance_in_minutes + ' minutos';
                }
                if (distance_in_minutes < 90) {
                    return tense + 'cerca de uma hora';
                }
                if (distance_in_minutes < 1440) {
                    return tense + 'cerca de ' + Math.floor(distance_in_minutes / 60) + ' horas';
                }
                if (distance_in_minutes < 2880) {
                    return tense + 'um dia';
                }
                if (distance_in_minutes < 43200) {
                    return tense + Math.floor(distance_in_minutes / 1440) + ' dias';
                }
                if (distance_in_minutes < 86400) {
                    return tense + 'cerca de um mês';
                }
                if (distance_in_minutes < 525960) {
                    return tense + Math.floor(distance_in_minutes / 43200) + ' meses';
                }
                if (distance_in_minutes < 1051199) {
                    return tense + 'cerca de um ano';
                }

                return 'Mais de ' + Math.floor(distance_in_minutes / 525960) + ' anos';
            }
        },
        mounted() {
            this.category = this.notice.category
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .catalog__notice {
        transition: all 0.3s ease;
        width: 18em;
        margin: .5em;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background: $color-bar-white;
        }

        .catalog__content {
            position: relative;
            top: .5em
        }

        .catalog__control {
            width: 2em;
        }
    }

    .catalog__img {
        width: 6em;
        height: 4em;
    }


    @media (min-width: 992px) {
        .new__linkImg {
            margin: 0;
        }
    }
</style>