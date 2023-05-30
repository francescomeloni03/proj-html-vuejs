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
            ]
        }
    }
}
</script>

<template>
    <AppHeader :link-header="linkHeader" />
    <AppMain />
    <AppFooter />
</template>

<style></style>
