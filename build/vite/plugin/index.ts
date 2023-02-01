import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';

import { configMockPlugin } from './mock';
import { ViteEnv } from '../../../src/utils/vite';
import { svgBuilder } from '../../../src/components/icon/svg/index'


export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_PORT,
    VITE_OPEN,
    VITE_BASE_PATH,
    VITE_OUT_DIR, 
    VITE_PROXY_URL,
    VITE_AXIOS_BASE_URL,
    VITE_MOCK_SWITCH,
  } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
  ];

  // vite-plugin-windicss

  // @vitejs/plugin-legacy

  // vite-plugin-html

  // vite-plugin-svg-icons
  vitePlugins.push(svgBuilder('./src/assets/icons/'));

  // vite-plugin-mock
  VITE_MOCK_SWITCH && vitePlugins.push(configMockPlugin(isBuild));

  // vite-plugin-purge-icons

  // vite-plugin-style-import

  // rollup-plugin-visualizer

  // vite-plugin-theme

  // The following plugins only work in the production environment
  if (isBuild) {
  }

  return vitePlugins;
}
