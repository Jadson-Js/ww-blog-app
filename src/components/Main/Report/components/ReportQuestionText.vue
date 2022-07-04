<template>
    <label for="inputDescription" class="h5 form-label mt-4 report__label">Descrição do artigo:</label>
    <textarea name="description" id="inputDescription" class="form-control mb-4 report__input"
        placeholder="-Como tankar o bostil? 
-É essa desgraça desde 1500… QUEM PUDER FUJA NEM QUE SEJA POR MEIOS ILEGAIS." required></textarea>
    

    <label for="inputContent" class="h5 form-label report__label">Conteúdo do artigo:</label>
    <quill-editor name="content" id="inputContent" />
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    export default {
        computed: mapGetters(['GET_VALIDATED', 'GET_VALID_CREDENTIALS']),
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .report__label {
        font-weight: 600;
        color: $color-dark-black;
    }
</style>