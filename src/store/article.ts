import { resolve } from 'path'
import { defineStore } from 'pinia'
import { Names } from './store-name'
// type mesType = {
//     path: string,
//     articleType: string,
//     tagSwitch: boolean,
//     blogTitle: string
// }


export const userArticle = defineStore(Names.ARTICLE, {
    /***
 *类似于组件的 data数据的 ,用来存储全局状态的
 * 1、必须是箭头函数
 */
    state: () => {
        return {
            path: '',
            articleType: 'WeChatList',
            tagSwitch: true,
            blogTitle: ''
        }
    },

    /***
     *封装处理数据的函数（业务逻辑)：修改数据
     *同步异步都可以
     */
    actions: {
        // 定义mutations，用于同步修改状态
        alterType(payload: string) {
            console.log(payload)
            this.articleType = payload
        },
        alternatePath(state: any, path: string) {
            state.path = path
        },
        labelchang(flag: boolean) {
            this.tagSwitch = flag
        },
        setBloge(des: string) {
            this.blogTitle = des
        }
    },
    getters: {

    }
})