<template>
    <header class="p-4">
        <h1 class="text-6xl mb-8">{{ title }}</h1>
        <Nav />
    </header>
</template>

<script>
import Nav from "./Nav.vue";

export default {
    props: {
        title: String,
    },
    components: {
        Nav,
    },
};
</script>
