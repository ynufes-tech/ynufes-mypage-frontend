import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// const myTheme: ThemeDefinition = {
//   dark: false,
//   colors: {
//     background: "#FFFFFF",
//     surface: "#FFFFFF",
//     primary: "#1d2630",
//     "primary-darken-1": "#3700B3",
//     secondary: "#03DAC6",
//     "secondary-darken-1": "#018786",
//     error: "#B00020",
//     info: "#2196F3",
//     success: "#4CAF50",
//     warning: "#FB8C00",
//   },
// };

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    directives,
    components,
    // theme: {
    //   defaultTheme: "myTheme",
    //   themes: {
    //     myTheme,
    //   },
    // },
  });
  app.vueApp.use(vuetify);
});
