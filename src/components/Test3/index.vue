<template>
    <div class="red">
        {{message}}<br>
    </div>
</template>

<script>
    export default {
        name:'TestComponent3',
        setup(){
           const message ='hello3'
            return {
                message,
            }
        }
    }
</script>

<style scoped lang="scss">
.red{
    color: blue;
}
</style>
