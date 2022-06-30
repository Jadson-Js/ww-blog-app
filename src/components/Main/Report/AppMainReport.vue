<template>
  <main class="l-report">
    <div class="container">
      <form class="row" @submit.prevent>
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

      <div id="display-image">

      </div>
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
        let data = {}

        for (let [name, value] of formData) {
          data[name] = value ? value : 'x'
        }

        data['inputContent'] = document.querySelector('.ql-editor').innerHTML
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