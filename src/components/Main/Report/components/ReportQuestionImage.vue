<template>
    <div class="d-flex flex-column justify-content-center align-items-center report__image">
        <div id="reportInput" class="report__input is-cameraIcon">
            <input type="file" name="image" id="inputImage" accept="image/jpeg, image/png, image/jpg">
        </div>
        <span id="inputImageLabel" class="mb-2 report-label">Adicionar foto</span>

        {{ url }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: undefined
            }
        },
        methods: {
            // onFileChange(e) {
            //     const reportInput = document.querySelector("#reportInput")
            //     const inputImageLabel = document.querySelector("#inputImageLabel")
            //     const file = e.target.files[0];

            //     this.url = URL.createObjectURL(file);

            //     reportInput.remove('is-cameraIcon')
            //     inputImageLabel.classList.add('d-none')

            //     document.querySelector(".report__image").style.backgroundImage =`url(${this.url})`;
            // }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/__utils.scss';

    .report__image {
        height: 15.7em;
        background: $color-mute-green;
        background-position: center;
        background-size: cover;
        border: 2px dashed $color-green-light;
    }

    .report__input {
        overflow: hidden;

        input {
            opacity: 0;
            width: 4em;
            height: 4em;
        }
    }

    .is-cameraIcon {
        background: url('/src/assets/img/icon-camera.svg') no-repeat;
        background-size: cover;
    }

    .report-label {
        color: $color-green-light;
    }

    @media (min-width: 762px) {}
</style>