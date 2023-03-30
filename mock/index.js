import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer.js";

import testModule from "./source/login.js";

export function setupProdMockServer() {
  createProdMockServer([...testModule]);
}
