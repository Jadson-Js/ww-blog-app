<template>
    <div class="d-flex flex-column justify-content-center align-items-center report__image">
        <div class="report__input">
            <input type="file" name="inputImage" accept="image/jpeg, image/png, image/jpg">
        </div>
        <span class="mb-2 report-label">Adicionar foto</span>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .report__image {
        height: 15.7em;
        background: $color-mute-green;
        border: 2px dashed $color-green-light;
    }

    .report__input {
        background: url('/src/assets/img/icon-camera.svg') no-repeat;
        background-size: cover;
        overflow: hidden;

        input {
            opacity: 0;
            width: 4em;
            height: 4em;
        }
    }

    .report-label {
        color: $color-green-light;       
    } 

    @media (min-width: 762px) {
    }
</style>