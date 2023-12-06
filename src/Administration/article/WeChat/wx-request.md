####  1.根目录新建一个servers文件夹
---
####  2.在servers文件夹中创建network.js文件

###### ***封装接口文件***

```js
//network.js
import { recentUrl} from './config.js'

function recent(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: recentUrl + options.url,
      header: {
        'content-type': 'application/json',
      },
      method: options.method || 'get',
      data: options.data || {},
      success: function (res) {
        if (res.data.error === 5004) {
          wx.navigateTo({
            url: "/pages/attestation/login/login"
          });
        } else if (res.statusCode === 200) {
          resolve(res)
        }
      },
      fail: reject
    })
  })
}
export {
  recent,
};
```


---

###### 某页面单独封装接口



```js
//Interface.js
export function getinfo(param) {
  return request({
    url: '/api/alarm/getinfo'',
    method: 'POST',
    data: param
  })
}
```
---

#### 3.在页面中调用接口


###### ***调用接口文件***


```js
//index.js
import { getinfo} from "../../servers/Interface.js";
Page({
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
    getinfo({data:2}).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
   },
})

```