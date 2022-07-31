<template>
    <img :src="'http://localhost:3000/uploads/' + (GET_ARTICLE.ImageName || 0)" class="mb-2 hero__bg" alt="">

    <div class="d-flex flex-column hero__refs">
        <span class="mb-1 bg__refs">Escrito por Blog.com</span>
        <span class="bg__time">{{ formatTime(GET_ARTICLE.updatedAt) }} - Atualizado {{ time_ago_in_words_with_parsing(GET_ARTICLE.updatedAt) }}</span>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
            }
        },
        computed: mapGetters(['GET_ARTICLE']),
        methods: {
            formatTime(value) {
                if (value != undefined) {
                    let date = value.split('-')
                    let day = date[2].split('T')
                    return day[0] + '/' + date[1] + '/' + date[0]
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
            distance_of_time_in_words: function(to, from) {
                var distance_in_seconds = ((to - from) / 1000);
                var distance_in_minutes = Math.floor(distance_in_seconds / 60);
                var tense = distance_in_seconds < 0 ? "A partir de agora " : "há ";
                distance_in_minutes = Math.abs(distance_in_minutes);
                if (distance_in_minutes == 0) { return tense + 'menos de um minuto'; }
                if (distance_in_minutes == 1) { return tense + 'um minuto'; }
                if (distance_in_minutes < 45) { return tense + distance_in_minutes + ' minutos'; }
                if (distance_in_minutes < 90) { return tense + 'cerca de uma hora'; }
                if (distance_in_minutes < 1440) { return tense + 'cerca de ' + Math.floor(distance_in_minutes / 60) + ' horas'; }
                if (distance_in_minutes < 2880) { return tense + 'um dia'; }
                if (distance_in_minutes < 43200) { return tense +  Math.floor(distance_in_minutes / 1440) + ' dias'; }
                if (distance_in_minutes < 86400) { return tense +  'cerca de um mês'; }
                if (distance_in_minutes < 525960) { return tense +  Math.floor(distance_in_minutes / 43200) + ' meses'; }
                if (distance_in_minutes < 1051199) { return tense +  'cerca de um ano'; }

                return 'Mais de ' + Math.floor(distance_in_minutes / 525960) + ' anos';
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .hero__bg {
        width: 100%;
        height: 50vh;
        margin: auto;
    }

    .bg__refs {
        font-weight: 600;
        font-size: .9em;
        color: $color-dark-black;
    }

    .bg__time {
        color: $color-dark-light;
        font-size: .8em;
    }

    .hero__refs {
        padding-bottom: .8em;
        border-bottom: 1px solid $color-bar-white;
    }
</style>