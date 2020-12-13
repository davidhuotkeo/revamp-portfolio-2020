import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import Navigation from "./components/Navigation";

Vue.component("dave-nav", Navigation);

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
