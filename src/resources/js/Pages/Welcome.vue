<template>
    <header>
        <h1>Hello World</h1>
        <p>You are visiting {{ title }}.</p>

        <ul>
            <li v-for="category in categories">{{ category }}</li>
        </ul>
    </header>
</template>

<script>
export default {
    props: {
        title: String,
        frameworks: Array,
    },
};
</script>
