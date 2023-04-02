import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

import "./assets/main.css";

app.use(pinia);
app.mount("#app");
