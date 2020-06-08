<template>
    <div class="row" id="TranslateForm">
        <div class="mx-auto">
            <form class="form-inline" @submit="formSubmit">
                <input
                    class="form-control"
                    id="inputDefault"
                    type="text"
                    placeholder="请输入要翻译的内容"
                    v-model="inputText"
                />
                <select class="form-control" v-model="language">
                    <option value="en">英语</option>
                    <option value="ja">日语</option>
                    <option value="ko">韩语</option>
                    <option value="ru">俄语</option>
                </select>
                <input type="submit" value="翻译" class="btn btn-primary mx-auto" />
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TranslateForm',
    data() {
        return {
            inputText: '',
            language: 'en',
        }
    },
    methods: {
        formSubmit(e) {
            this.$emit('receive', this.inputText, this.language)
            e.preventDefault()
        },
    },
}
</script>

<style></style>
