import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'tnpm',
  chainWebpack(config) {
    console.log("Chaining Webpack");
    config.module.rule('bpmn').test(/\.bpmn$/).use('raw').loader('raw-loader');
  }
});
