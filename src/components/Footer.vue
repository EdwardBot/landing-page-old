<template>
    <div class="footer">
        &copy;{{new Date().getFullYear()}} EdwardBot
        <v-spacer></v-spacer>
        <a href="https://dashboard.edwardbot.tk">Dashboard</a> 
        <a href="https://dc.edwardbot.tk">Support szerver</a> 
        <a href="https://status.edwardbot.tk">Státusz</a> 
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: `Footer`
})
</script>

<style lang="scss">
    .footer {
        display: flex;
        height: 40px;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 18px;
        a {
            color: gray;
            margin: 5px;
        }
    }
</style>
