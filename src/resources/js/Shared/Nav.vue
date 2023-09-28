<template>
    <nav>
        <ul>
            <li>
                <NavLink href="/" :active="$page.component == 'Home'">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.component == 'Users'">
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink href="/settings" :active="$page.component == 'Settings'">
                    Settings
                </NavLink>
            </li>
            <li>
                <Link as="button" method="post" href="/logout" class="text-blue-600 hover:underline">Logout</Link>
            </li>
        </ul>
    </nav>
</template>

<script>
import NavLink from "./NavLink.vue";
import { Link } from "@inertiajs/vue3";

export default {
    components: { NavLink, Link },
};
</script>
