//获取public目录下所有的文件信息
const modulesFiles = import.meta.glob('@/Administration/article/**/*.md');
export const mdArticle = function (Vue: any, opts = {}) {
  //   for (const path in modulesFiles) {
  //     modulesFiles[path]().then((mod) => {
  //       let name = path.split('/').filter((item) => { return item.indexOf('-') != -1 })[0].split('.')[0].split('-');
  //       let mdName = '';
  //       name.forEach((itemName) => {
  //         mdName += itemName.substring(0, 1).toUpperCase() + itemName.substring(1);
  //       })
  //       // 使用内置的组件名称 进行全局组件注册
  //       Vue.component(mdName, mod.default)
  //     })
  // }
  Object.keys(modulesFiles).forEach(async (path) => {
    let name = path.split('/').filter((item) => { return item.indexOf('-') != -1 })[0].split('.')[0].split('-');
    let mdName = '';
    name.forEach((itemName) => {
      mdName += itemName.substring(0, 1).toUpperCase() + itemName.substring(1);
    })
    const MdComponent:any = await modulesFiles[path]()
    Vue.component(mdName, MdComponent.default)
  })
}

