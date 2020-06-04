<template>
    <div id="TranslateOutput" class="font">
        <div>{{ outputText }}</div>
    </div>
</template>

<script>
export default {
    name: 'TranslateOutput',
    props: ['outputText'],
}
</script>

<style>
.font {
    font-size: 20px;
}
</style>
