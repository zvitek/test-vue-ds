import { applyPolyfills, defineCustomElements } from "@gov-design-system-ce/components/loader";

export default defineNuxtPlugin(() => {
  applyPolyfills().then(() => {
    defineCustomElements(window);
  });
});
