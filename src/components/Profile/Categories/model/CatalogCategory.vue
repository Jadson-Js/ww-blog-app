<template>
    <article class="d-flex justify-content-between align-items-center m-2 catalog__category">
        <div class="catalog__content">
            <h2 class="h6 m-0">{{ category.title }}</h2>
        </div>

            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="dropdown-toggle catalog__control"
                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><router-link class="dropdown-item" :to="{ name: 'editCategory', params: { categoryId: category.id, categoryTitle: category.title }}">Editar</router-link></li> 
                <li class="dropdown-item" @click="deleteCategory(category.id)">Deletar</li>
            </ul>
    </article>
</template>

<script>
    export default {
        props: ['category'],
        methods: {
            deleteCategory(id) {
                 if (confirm('Deseja apagar esta categoria?') ) {
                this.$store.dispatch('deleteCategory', id)
                this.$router.go()   
                 }
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .catalog__category {
        transition: all 0.3s ease;
        width: 9em;
        padding: .5em;
        border-radius: 5px;
        cursor: pointer;
        background: $color-green-light;

        &:hover {
            background: $color-green;
        }

        .catalog__content h2 {
            font-weight: 600;
            color: $color-dark-ultra-black;
        }

        .catalog__control {
            width: 1em;
        }
    }
</style>