import { createApp } from "vue";
import App from "./App.vue";
import routes from "./route/routes.js";
import vueSmoothScroll from "vue-smooth-scroll";
import "alpinejs";
import "@/assets/css/style.css";
import "@/assets/css/tailwind.css";
import { createGtm } from "@gtm-support/vue-gtm";

const app = createApp(App);

app.use(
  createGtm({
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_KEY,
    vueRouter: routes,
  })
);

app.use(routes);
app.use(vueSmoothScroll);
app.mount("#app");
