import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import axios from "axios";
Vue.prototype.$axios = axios;
// 引入并使用axios
 
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
// 引入并使用vant

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
//引入并使用element-ui

// 把自己封装的http函数拿来用
import http from "./http/http.js";
Vue.prototype.$http = http;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");