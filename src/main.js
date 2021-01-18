import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import Navigation from "./components/Navigation";
import Toggle from "./components/ThemeToggle"
import Button from "./components/Button"

Vue.component("dave-nav", Navigation);
Vue.component("dave-theme", Toggle);
Vue.component("dave-btn", Button);

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
