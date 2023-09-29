import { createApp, h } from "vue";
import { Link, createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import "../css/app.css";
import Layout from "./Shared/Layout.vue";

createInertiaApp({
    progress: {
        delay: 250,
        showSpinner: true,
    },

    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue"),
        );

        page.default.layout ??= Layout;

        return page;
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .mount(el);
    },
});
