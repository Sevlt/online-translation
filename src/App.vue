<template>
    <div id="app" class="text-center" style="margin-top:50px;">
        <h2>在线翻译</h2>
        <h6 class="text-muted">中文转换多国语言</h6>
        <br />
        <TranslateForm @receive="TranslateText"></TranslateForm>
        <TranslateOutput v-bind:outputText="outputText"></TranslateOutput>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'
export default {
    name: 'App',
    data() {
        return {
            outputText: '',
        }
    },
    components: {
        TranslateForm,
        TranslateOutput,
    },
    methods: {
        TranslateText(text, language) {
            this.$http
                .get(
                    'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180611T041751Z.761a657e2b451443.1c8c07e511b6d3bf8a5744cf21be71903bb64489&lang=' +
                        language +
                        '&text=' +
                        text
                )
                .then((res) => {
                    this.outputText = res.body.text[0]
                })
        },
    },
}
</script>

<style></style>
