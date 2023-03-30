import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer.js";

import testModule from "./source/login.js";

const modules = import.meta.glob("./source/*.js",{
  eager: true
})

console.log(modules)
console.log(testModule)

const mockModules = []
debugger
Object.keys(modules).forEach(key=>{
  console.log(key)
  console.log(modules[key])
  console.log(modules[key])
  mockModules.push(...modules[key].default)
})


export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
