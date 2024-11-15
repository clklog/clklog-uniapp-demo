import { createSSRApp } from "vue";

import App from "./App.vue";
// import AppH5 from "./App-h5.vue";
// import AppAndrodIos from "./App.androd-ios.vue";
// import AppMinprogram from "./App.minprogram.vue";

export function createApp() {
  const app = createSSRApp(App);
  // const app = createSSRApp(AppH5);
  // const app = createSSRApp(AppAndrodIos);
  // const app = createSSRApp(AppMinprogram);
  return {
    app,
  };
}
