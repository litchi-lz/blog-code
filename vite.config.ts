
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Markdown from 'vite-plugin-vue-markdown'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';
import path,{resolve} from 'path'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })
export default ({command,mode})=>{
  return {
    base:'./',
    // base:VITE_APP_ENV !== "development"?"/":"./",
    server: {
      hmr:true,
      // 服务配置
      port: 5001, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      //proxy look for https://vitejs.cn/config/#server-proxy
      proxy: {
        '/api': {
          target: 'http://ashuai.work:10000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    preview: {
      port: 5002,
      host: '0.0.0.0',
      strictPort: true
    },
    plugins:[
      Vue({
        include: [/\.vue$/, /\.md$/], // <--
      }),
      AutoImport({
        // resolvers: [ElementPlusResolver()],
        imports: [
          'vue',
          'pinia',
          'vue-router',
          {
            //import {useCommon} from  @/hooks/global/useCommon
            '@/hooks/global/useCommon': ['useCommon'],
          
          }
        ],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        dts: './auto-imports.d.ts',
      }),
      Components({
        dirs: ['src/components'], // 按需加载的文件夹
        resolvers: [ElementPlusResolver()],
        extensions: ['vue',],
        deep: true,
        // customLoaderMatcher: path => path.endsWith('.md'),
      }),
      Markdown(),
      Pages({
        dirs: [
          { dir: 'src/Administration/article/**', baseRoute: 'substance' },
        ],
        extensions: ['vue', 'md'],
      }),
      Layouts({
        // 如果是默认 layouts文件夹，默认 default.vue文件，则不需要配置
          layoutsDirs: 'src/layout',
          defaultLayout: 'default',
        }),
    ],
    resolve: {
      alias: {
        '~': resolve(__dirname,'./'),
        '@':resolve(__dirname,'src')
      }
      //why remove it , look for https://github.com/vitejs/vite/issues/6026
      // extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
    },
  }
}
