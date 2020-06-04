<template>
    <div id="TranslateForm">
        <form class="alert alert-dismissible alert-light form-inline content" @submit="formSubmit">
            <input
                class="form-control"
                id="inputDefault"
                type="text"
                placeholder="请输入要翻译的内容"
                v-model="inputText"
            />
            <select class="form-control" id="exampleSelect1" v-model="language">
                <option value="en">英语</option>
                <option value="ja">日语</option>
                <option value="ko">韩语</option>
                <option value="ru">俄语</option>
            </select>
            <input type="submit" value="翻译" class="btn btn-info" />
        </form>
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

<style>
.content {
    border: 1px solid red;
    display: flex;
    justify-content: center;
}

</style>
