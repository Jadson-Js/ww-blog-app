<template>
  <!--
  <label for="inputTitle" class="h5 form-label mt-4 mt-md-0 report__label">Título do artigo:</label>
  <input type="text" name="title" id="inputTitle" class="form-control report__input" placeholder="Como tankar o Bostil"
    :value="GET_ARTICLE.title">

  <label for="inputKeywords" class="h5 form-label report__label">Keywords do artigo:</label>
  <input type="text" name="keywords" id="inputKeywords" class="form-control report__input"
    placeholder="bostil, como tankar, memes, politica, brasil e etc." :value="GET_ARTICLE.keywords">

  <label for="selectCategory" class="h5 form-label report__label">Categoria do artigo:</label>
  <select name="CategoryId" id="selectCategory" class="form-select" :value="GET_ARTICLE.CategoryId || undefined" v-model="category"
    required>
    <option v-for="(value, key) in GET_CATEGORIES" :key="key" :value="value.id">{{ value.title }}</option>
  </select>
  -->

  <label for="inputTitle" class="h5 form-label mt-4 mt-md-0 report__label">Título do artigo:</label>
  <input type="text" name="title" id="inputTitle" class="form-control report__input" placeholder="Como tankar o Bostil"
    value="Faz 5 horas que estou assistindo meu irmãozinho na TV">

  <label for="inputKeywords" class="h5 form-label report__label">Keywords do artigo:</label>
  <input type="text" name="keywords" id="inputKeywords" class="form-control report__input"
    placeholder="bostil, como tankar, memes, politica, brasil e etc." value="tecnologia, loggi tecnologia ltda, tecnologia da informação, o que é tecnologia, shippify tecnologia ltda, tecnologia e defesa, tecnología 5g, fundo tecnologia, bexs tecnologia da informação">

  <label for="selectCategory" class="h5 form-label report__label">Categoria do artigo:</label>
  <select name="CategoryId" id="selectCategory" class="form-select" :value="GET_ARTICLE.CategoryId || undefined" v-model="category"
    required>
    <option v-for="(value, key) in GET_CATEGORIES" :key="key" :value="value.id">{{ value.title }}</option>
  </select>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        category: 4,
        onlyUpdate: false
      }
    },
    computed: mapGetters(['GET_CATEGORIES', 'GET_IS_LOGGED', 'GET_ARTICLE']),
    updated() {
      if (!this.onlyUpdate) {
        this.category = this.$store.getters.GET_ARTICLE.CategoryId
        this.onlyUpdate = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/__utils.scss';

  .report__label {
    font-weight: 600;
    color: $color-dark-black;
    margin-top: 1em;
  }
</style>