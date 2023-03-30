import { boot } from 'quasar/wrappers'
import { setupProdMockServer } from "/mock/index.js";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  setupProdMockServer();
})

