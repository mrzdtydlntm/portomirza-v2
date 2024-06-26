import { createApp } from "vue";
import App from "./App.vue";
import routes from "./route/routes.js";
import vueSmoothScroll from "vue-smooth-scroll";
import "alpinejs";
import "@/assets/css/style.css";
import "@/assets/css/tailwind.css";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(
  VueGtag,
  {
    config: {
      id: process.env.VUE_APP_GOOGLE_ANALYTICS_KEY,
    },
    appName: "My Portfolio",
    pageTrackerEnabled: true,
    pageTrackerScreenviewEnabled: true,
  },
  routes
);

app.use(routes);
app.use(vueSmoothScroll);
app.mount("#app");
