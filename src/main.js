import { createApp } from "vue";
import App from "./App.vue";
import routes from "./route/routes.js";
import vueSmoothScroll from "vue-smooth-scroll";
import VueGtag from "vue-gtag-next";

import "@/assets/css/style.css";
import "@/assets/css/tailwind.css";

const app = createApp(App);

app.use(VueGtag, {
  property: {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_KEY,
  },
  isEnabled: process.env.NODE_ENV === "production",
  useDebugger: process.env.NODE_ENV !== "production",
  trackRoutes: true, // Automatic route tracking
});

app.use(routes);
app.use(vueSmoothScroll);
app.mount("#app");

export default {
  setup() {
    const { event } = VueGtag.useGtag();

    const trackEvent = () => {
      event("button_click", {
        event_category: "engagement",
        event_label: "homepage_cta",
        value: 1,
      });
    };

    return {
      trackEvent,
    };
  },
};
