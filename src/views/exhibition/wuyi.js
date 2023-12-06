import path from "path";
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
 
// https://vitejs.dev/config/
export default ({ mode }) => {
  //参数mode为开放模式或生产模式
  const env=loadEnv(mode, process.cwd());   // 获取.env文件里定义的环境变量
  
  return defineConfig({
    plugins: [vue()],
 
    resolve: {
      alias: {
        //别名配置
        "@": path.resolve(__dirname, "src"), 
        "@comp": path.resolve(__dirname, "src/components"),
        "changOrigin":true,
        "rewrite":(path)=>path.replace(/^\/api/,"hoursJscell"),
        proxy:{
          "/api":{
            target:env.VITE_APP_API,
            base:env.VITE_APP_BASE_URL || '/',
          }
        }
      },
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_APP_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    //项目部署在主域名的子文件使用,例如http://localhost:3000/myvite/。不填默认就是/
    base: env.VITE_APP_BASE_URL || '/',
  })
}
 