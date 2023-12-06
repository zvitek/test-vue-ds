// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@gov-design-system-ce/fonts/lib/roboto.css",
    "@gov-design-system-ce/styles/lib/critical.css",
    "@gov-design-system-ce/styles/lib/styles.css",
    "@gov-design-system-ce/styles/lib/layout.css",
    "@gov-design-system-ce/styles/lib/content.css",
    "@gov-design-system-ce/styles/lib/print.css"
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag.startsWith("gov-"),
    },
  },

})
