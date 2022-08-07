<template>
    <article class="is-container__new d-flex flex-column flex-sm-row-reverse justify-content-sm-end align-items-start feed__notice">
        <div class="ms-sm-3">
            <div class="d-inline-block mb-2"> <!-- Mostre a categorias dinamicamente & o horario q foi postado também -->
                <span class="d-inline is-new__category">{{ notice.category.title }} - </span><span class="is-new__time">{{ time_ago_in_words_with_parsing(notice.updatedAt) }}</span>
            </div>
            <h1 class="h3">
                <router-link class="is-link is-new__title" :to="{name: 'notice', params: {category: notice.category.title, noticeId: notice.id, noticeTitle: notice.title}}">
                    {{ notice.title }}
                </router-link>
            </h1>

            <p class="d-none d-lg-inline is-new__text">
                {{ notice.description }} <!-- aplique filtro para q depois de um certo numero de caracteres, o conteudo seja escondido -->
            </p>
        </div>

        <router-link class="new__linkImg" :to="{name: 'notice', params: {category: notice.category.title, noticeId: notice.id, noticeTitle: notice.title}}">
            <img :src="'https://ww-blog-api.herokuapp.com/uploads/' + notice.ImageName" class="mt-2 is-linkImg new__img" alt="">
        </router-link>
    </article>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['notice'],
        methods: {
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
                var tense = distance_in_seconds < 0 ? "A partir de agora " : "Há ";
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

    .new__linkImg,
    .new__img {
        width: 100%;
        height: 13em;
        margin: 0 auto;
    }
    

    @media (min-width: 576px) {
        .new__linkImg,
        .new__img {
            width: 15em;
            height: 10em;
            margin: 0 ;
        }
    }
</style>