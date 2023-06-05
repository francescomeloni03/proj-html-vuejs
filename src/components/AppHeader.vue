<script>
import { store } from '../store'

export default {
    name: "AppHeader",
    props: ["linkHeader"],

    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="container-header">
            <div class="left-part">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="right-part">
                <div v-for="link in linkHeader" class="link-header">
                    <a href=""><small>{{ link }}</small></a>
                </div>
                <div class="link-header">
                    <button><strong>JOIN US</strong></button>
                </div>
                <div class="link-header">
                    <a href=""><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
                </div>



            </div>

        </div>

    </header>
</template>

<style scoped lang="scss">
@use '../style.scss' as *;

header {
    height: 70px;
    background-color: $color-1;
}

.container-header {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 70px;

}

.left-part {
    width: 30%;
    display: flex;
    align-items: center;
}

.right-part {
    display: flex;
    width: 40%;
}

.right-part a {
    text-decoration: none;
    color: $color-white;
    padding-right: 20px;
}

.link-header {
    align-items: center;
    display: flex;
}

.left-part img {
    height: 60px;
}

button {
    height: 30px;
    width: 80px;
    border: none;
    background-color: $color-2;
    color: $color-white;
    margin-right: 20px;
    cursor: pointer;
    transition-duration: 0.4s;
}

button:hover {
    background-color: black;
}

button:active {
    background-color: black;
    transform: translateY(4px);
}
</style>
