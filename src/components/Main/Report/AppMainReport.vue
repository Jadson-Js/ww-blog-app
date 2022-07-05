<template>
  <main class="l-report">
    <div class="container">
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
            value="Publicar artigo">
        </div>
      </form>
    </div>
  </main>
</template>


<script>
  import ReportQuestionImage from "./components/ReportQuestionImage.vue";
  import ReportQuestionInput from "./components/ReportQuestionInput.vue";
  import ReportQuestionText from './components/ReportQuestionText.vue'

  export default {
    components: {
      ReportQuestionImage,
      ReportQuestionInput,
      ReportQuestionText
    },
    methods: {
      async createNotice(form) {
        const formData = new FormData(form)
        
        const formFormated = this.fillDataForm(formData)

        if (formFormated.dataValid == true) {
          this.createNewCategory(formFormated)

          await this.$store.dispatch('reportNotice', formFormated)

          this.verifySuccess()
        } else {
          alert('Preencha todos os inputs')
        }
      },

      fillDataForm (formData) {
        let data = {}
        let dataValid
        data['content'] = document.querySelector('.ql-editor').innerHTML

        for (let [name, value] of formData) {
          console.log(value)

          if (value.name == "" || value == "") {
            dataValid = false
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

      verifySuccess() {
        if (this.$store.getters.GET_SUCCESS) {
            this.$router.replace({
              name: 'profile'
            })
          } else {
            alert('Fracasso')
          }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/__utils.scss";

  .l-report {
    background: #fff;
    padding-top: 1.5em;

    .report__button {
      background: $color-green;
      color: #fff;
      border-radius: 10px;
      margin: 13em 0 2em;
    }
  }
</style>