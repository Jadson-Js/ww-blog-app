<template>
    <article class="d-flex flex-row flex-md-column flex-lg-row align-items-start justify-content-start post__new">
        <router-link class="new__linkImg" :to="{name: 'notice', params: {category: category, noticeId: notice.id, noticeTitle: notice.title}}">
            <img rel="prefetch" loading="lazy" :src="notice.ImageUrl"
                class="mb-md-2 mb-lg-0 is-linkImg new__img" alt="">
        </router-link>

        <div class="d-flex flex-column justify-content-start ms-2 new__content">
            <h2 class="h6">
                <router-link class="is-link is-new__title" :to="{name: 'notice', params: {category: category, noticeId: notice.id, noticeTitle: notice.title}}">
                    {{ notice.title }}
                </router-link>
            </h2>

            <div class="d-inline">
                <span class="is-new__time">{{ time_ago_in_words_with_parsing(notice.updatedAt) }}</span>
            </div>
        </div>
    </article>
</template>

<script>

    export default {
        data() {
            return {}
        },
        props: ['notice', 'category'],
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

    .post__new {
        width: 100%;
        margin: 1em auto 0;
        padding-bottom: 1em;
        border-bottom: 1px solid $color-grey;

        &:last-of-type {
            border-bottom: none;
            padding-bottom: 0;
        }
    }

    .new__time {
        color: $color-grey;
        font-weight: 370;
    }

    .new__img {
        width: 8em;
        height: 5em;
        border-radius: 5px;
    }

    @media (min-width: 768px) {
        .new__linkImg {
            margin: 0 auto;
        }
    }

    @media (min-width: 992px) {
        .new__linkImg {
            margin: 0;
        }
    }
</style>