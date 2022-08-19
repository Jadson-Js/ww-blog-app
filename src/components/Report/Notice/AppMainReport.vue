<template>
  <main class="l-report">
    <div class="container">
      <h1 class="text-center mb-4 report__title">{{ submit }}</h1>

      <form class="needs-validation row" @submit.prevent novalidate>
        <div class="col-12 col-md-5">
          <ReportQuestionImage />
        </div>

        <div class="col-12 col-md-7">
          <ReportQuestionInput />
        </div>

        <div class="col-12">
          <ReportQuestionText />
        </div>

        <div class="d-grid col">
          <input type="submit" @click="createNotice($event.target.form)" class="btn btn-lg report__button"
            :value="submit">
        </div>
      </form>
    </div>
  </main>
</template>


<script>
  import {
    mapGetters
  } from "vuex";
  import ReportQuestionImage from "./components/ReportQuestionImage.vue";
  import ReportQuestionInput from "./components/ReportQuestionInput.vue";
  import ReportQuestionText from './components/ReportQuestionText.vue'

  export default {
    components: {
      ReportQuestionImage,
      ReportQuestionInput,
      ReportQuestionText
    },
    data() {
      return {
        isEdit: false,
        submit: 'Publicar artigo'
      }
    },
    computed: mapGetters(['GET_ARTICLE']),
    methods: {
      async createNotice(form) {
        const formData = new FormData(form)

        const formFormated = this.fillDataForm(formData)

        if (formFormated.dataValid == true) {
          formData.append('image', File)

          await this.$store.dispatch('uploadImg', formData)

          await this.createOrUpdateNotice(formFormated.data)

          if (this.$store.getters.GET_SUCCESS) {
            this.$router.replace({ name: 'profile' })
          } else {
            alert('Tentativa de publicar noticia fracassada :(')
          }
        } else {
          alert('Preencha todos os inputs')
        }
      },

      fillDataForm(formData) {
        let data = {}
        let dataValid
        data['content'] = document.querySelector('.ql-editor').innerHTML

        for (let [name, value] of formData) {
          if (value == "" || value.name == "") {
            dataValid = false
            break
          } else {
            data[name] = value
            dataValid = true 
          }
        }

        return {
          data,
          dataValid
        }
      },

      async createNewCategory(formFormated) {
        if (formFormated.CategoryId == 'new') {
          await this.$store.dispatch('createCategoryByApi', formFormated.newCategoryTitle)

          formFormated['CategoryId'] = this.$store.getters.GET_NEW_CATEGORY_ID
        }
      },

      async createOrUpdateNotice(formData) {
        if (this.isEdit) {
          const noticeId = this.$route.params.noticeId

          await this.$store.dispatch('editReportNotice', {
            formData,
            noticeId
          })
        } else {
          await this.$store.dispatch('reportNotice', formData)
        }
      }
    },
    async mounted() {
      if (this.$route.name == 'editReport') {
        await this.$store.dispatch('getNoticesByApiToArticle', this.$route.params.noticeId)
        this.isEdit = true
        this.submit = 'Editar artigo'
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/__utils.scss";

  .l-report {
    background: #fff;
    padding-top: 1.5em;

    .report__title {
      font-weight: 600;
    }

    .report__button {
      background: $color-green;
      color: #fff;
      border-radius: 10px;
      margin: 13em 0 2em;
    }
  }
</style>