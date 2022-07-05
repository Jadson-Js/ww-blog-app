<template>
  <label for="inputTitle" class="h5 form-label mt-4 mt-md-0 report__label">Título do artigo:</label>
  <input type="text" name="title" id="inputTitle" class="form-control report__input"
    placeholder="Como tankar o Bostil">
 
  <label for="selectCategory" class="h5 form-label report__label">Categoria do artigo:</label>
  <select name="CategoryId" id="selectCategory" class="form-select" v-model="category" required>
    <option value="new">Nova categoria!</option>
    <option v-for="(value, key) in GET_CATEGORIES" :key="key" :value="value.id">{{ value.title }}</option>
  </select>
  <div class="invalid-feedback">
    Selecione uma categoria!
  </div>

  <div v-show="category == 'new'">
    <label for="inputNewCategory" class="h5 form-label report__label">Nova categoria:</label>
    <input type="text" name="newCategoryTitle" id="inputNewCategory" class="form-control report__input"
      placeholder="Tutoriais" required>
   
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        category: ''
      }
    },
    computed: mapGetters(['GET_CATEGORIES', 'GET_IS_LOGGED']),
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