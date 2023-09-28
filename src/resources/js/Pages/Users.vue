<template>
    <Header title="Users" />

    <div class="absolute -bottom-12 px-4 pt-8">
        <time class="block">{{ time }}</time>
        <Link class="text-blue-600 hover:underline" preserve-scroll href="/users">Refresh</Link>
    </div>
</template>

<script>
import Header from "../Shared/Header.vue";
import { Link } from "@inertiajs/vue3";

export default {
    components: { Header },
    props: {
        time: String,
    },
};
</script>
