import { resolve } from 'path'
import { defineStore } from 'pinia'
import { Names } from './store-name'
type User = {
    name: string,
    age: number
}
let result: User = {
    name: '掘金',
    age: 2022
}
const Login = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: '荔枝',
                age: 18
            })
        }, 2000)
    })
}
export const userTest = defineStore(Names.TEST, {
    /***
 *类似于组件的 data数据的 ,用来存储全局状态的
 * 1、必须是箭头函数
 */
    state: () => {
        return {
            user: <User>{},
            name: ''
        }
    },

    /***
     *封装处理数据的函数（业务逻辑)：修改数据
     *同步异步都可以
     */
    actions: {
        setUser() {
            this.user = result;
        },
        async setLogin(){
           const result =  await Login()
           this.user = result
        }
    },
    getters: {

    }
})