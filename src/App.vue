<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

import { store } from './store';


export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter,
    },
    data() {
        return {
            store,
            linkHeader: [
                "Home", "Apple", "Microsoft", "Android", "Forums", "Contact us"
            ],

            cards1: [
                {
                    image: "src/assets/img/post_feat_img_25-700x441.jpg",
                    title: "Morbi vitae dui euismond vulputate sollicitudin",
                    date: "October 11th, 2015",
                    comments: "2",
                    info: "Donec finibus sit amet orci eget ulricies. Praesent posuere ante ut erat fringilla, vestibulum placerat, metus mattis. Aenean dictum vitae nisl"
                },
                {
                    image: "src/assets/img/post_feat_img_24-700x441.jpg",
                    title: "Vivamus pellenteque, felis quis varius",
                    date: "October 11th, 2015",
                    comments: "Off",
                    info: "Donec finibus sit amet orci eget ulricies. Praesent posuere ante ut erat fringilla, vestibulum placerat, metus mattis. Aenean dictum vitae nisl"
                },
                {
                    image: "src/assets/img/post_feat_img_23-700x441.jpg",
                    title: "Donec ornare pretium eget scelisque justo",
                    date: "October 11th, 2015",
                    comments: "Off",
                    info: "donec finibus sit amet orci eget ulricies. Praesent posuere ante ut erat fringilla, vestibulum placerat, metus mattis. Aenean dictum vitae nisl"
                },

            ],


            cards2: [

                {
                    image: "src/assets/img/post_feat_img_22-700x441.jpg",
                    title: "Fusce sollicitudin nunc sed placerat varius",
                    date: "October 11th, 2015",
                    comments: "off",
                    info: "Donec finibus sit amet orci eget ulricies. Praesent posuere ante ut erat fringilla, vestibulum placerat, metus mattis. Aenean dictum vitae nisl"
                },
                {
                    image: "src/assets/img/post_feat_img_21-700x441.jpg",
                    title: "Donec facilis sodales leo sit amet laoreet",
                    date: "October 11th, 2015",
                    comments: "Off",
                    info: "Donec finibus sit amet orci eget ulricies. Praesent posuere ante ut erat fringilla, vestibulum placerat, metus mattis. Aenean dictum vitae nisl"
                },
                {
                    image: "src/assets/img/post_feat_img_20-700x441.jpg",
                    title: "Proin eu purus sed aru aliquet curabir vens",
                    date: "October 11th, 2015",
                    comments: "Off",
                    info: "donec finibus sit amet orci eget ulricies. Praesent posuere ante ut erat fringilla, vestibulum placerat, metus mattis. Aenean dictum vitae nisl"
                }

            ],

            cards3: [

                {
                    image: "src/assets/img/post_feat_img_23-147x118.jpg",
                    title: " Donec facilis sodales leo sit amet laoreet",
                    date: "October 11th, 2015",
                    comments: "off",
                },
                {
                    image: "src/assets/img/post_feat_img_22-147x118.jpg",
                    title: "Fusce sollicitudin nunc sed placerat varius",
                    date: "October 11th, 2015",
                    comments: "Off",
                },
                {
                    image: "src/assets/img/post_feat_img_20-147x118.jpg",
                    title: "Proin eu purus sed aru aliquet curabir vens",
                    date: "October 11th, 2015",
                    comments: "Off",
                }

            ]





        }
    }
}
</script>

<template>
    <AppHeader :link-header="linkHeader" />
    <AppMain :cards1="cards1" :cards2="cards2" :cards3="cards3" />
    <AppFooter />
</template>

<style></style>
