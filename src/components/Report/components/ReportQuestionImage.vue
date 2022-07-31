<template>
    <div :class="classToReportImage">
        <div id="reportInput" :class="['report__input', classIcon]">
            <input type="file" name="image" id="inputImage" accept="image/jpeg, image/png, image/jpg" @change="onFileChange">
        </div>
        <span id="inputImageLabel" class="mb-2 report-label">Adicionar foto</span>
    </div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";

    export default {
        data() {
            return {
                classToReportImage: 'd-flex flex-column justify-content-center align-items-center report__image',
                classIcon: 'is-cameraIcon',
                url: undefined
            }
        },
        computed: mapGetters(['GET_ARTICLE']),
        methods: {
            onFileChange(e) {
                // const reportInput = document.querySelector("#reportInput")
                const inputImageLabel = document.querySelector("#inputImageLabel")
                const file = e.target.files[0];

                this.url = URL.createObjectURL(file);

                // reportInput.remove('is-cameraIcon')
                inputImageLabel.classList.add('d-none')

                document.querySelector(".report__image").style.backgroundImage =`url(${this.url})`;

                this.classIcon = ''
            } 
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