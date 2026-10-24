import "./style.css";

import { createApp } from "vue";

import overpyIconUrl from "../../img/overpy.png?url";
import App from "./App.vue";
import { installCodiconStyles } from "./lib/codicons";

installCodiconStyles();

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = overpyIconUrl;
document.head.appendChild(favicon);

createApp(App).mount("#app");
