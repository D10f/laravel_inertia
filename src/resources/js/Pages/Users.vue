<template>
    <Head title="Users" />
    <h2 class="font-bold text-2xl">Users</h2>

    <table class="min-w-full">
        <tbody class="divide-y divide-gray-200">
            <tr v-for="user in users.data" :key="user.id">
                <td class="px-6 py-4 whitespace-nowrap">
                    <h3>{{ user.name }}</h3>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link :href="`/users/${user.id}`" class="text-indigo-600 hover:text-indigo-900">Edit</Link>
                </td>
            </tr>
        </tbody>
    </table>

    <Pagination :links="users.links" class="mt-6" />
</template>

<script setup>
import Pagination from "../Shared/Pagination.vue";

defineProps({
    users: Object,
});
</script>
