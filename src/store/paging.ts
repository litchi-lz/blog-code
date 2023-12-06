import { resolve } from 'path'
import { defineStore } from 'pinia'
import { Names } from './store-name'

export const userPaging = defineStore(Names.PAGING, {
    /***
 *类似于组件的 data数据的 ,用来存储全局状态的
 * 1、必须是箭头函数
 */
    state: () => {
        return {
            WeChatList: {
                currentPage: 1,    //当前页数
                totaltPage: null,  //总条数
                pageSize: 5,
            },
            Vue2List: {
                currentPage: 1,    //当前页数
                totaltPage: null,  //总条数
                pageSize: 5,
            },
            Vue3List: {
                currentPage: 1,    //当前页数
                totaltPage: null,  //总条数
                pageSize: 5,
            },
            CSS3List: {
                currentPage: 1,    //当前页数
                totaltPage: null,  //总条数
                pageSize: 5,
            },
            H5List: {
                currentPage: 1,    //当前页数
                totaltPage: null,  //总条数
                pageSize: 5,
            },
            UniAppList: {
                currentPage: 1,    //当前页数
                totaltPage: null,  //总条数
                pageSize: 5,
            },
            Universal: {
                currentPage: 1,    //当前页数
                totaltPage: null,  //总页数
                pageSize: 5,
            },
        }
    },

    /***
     *封装处理数据的函数（业务逻辑)：修改数据
     *同步异步都可以
     */
    actions: {
        // 定义mutations，用于同步修改状态
        changeTotal(payload: any) {
            this[payload.type][payload.attribute] = payload.value
        },
    },
    getters: {

    }
})