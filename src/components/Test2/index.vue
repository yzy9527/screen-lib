<template>
    <div class="red">
        {{message}}<br>
    </div>
</template>

<script>
    export default {
        name:'TestComponent2',
        setup(){
           const message ='hello2'
            return {
                message,
            }
        }
    }
</script>

<style scoped lang="scss">
.red{
    color: red;
}
</style>
