<template>
    <h2 class="font-bold text-2xl">Users</h2>
    <div class="absolute -bottom-12 px-4 pt-8">
        <time class="block">{{ time }}</time>
        <Link
            class="text-blue-600 hover:underline"
            preserve-scroll
            href="/users"
            >Refresh</Link
        >
    </div>
</template>

<script setup>
defineProps({
    time: String,
});
</script>
