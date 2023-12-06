#### 1.注册腾讯位置服务
```
    - 1.创建应用
    - 2.添加key
    - 3.key编辑
    - 4.WebServiceAPI 设置 授权IP
    - 5.填写服务器域名
    - 6.微信小程序-授权Appid
```
----
#### 2.wxml文件

```html
<view class="" hover-class="none" hover-stop-propagation="false" style="width: 100%; height: 100%;">
  <map id="map" longitude="{{longitude}}" latitude=" {{latitude}}" bindmarkertap="clickMap" markers="{{markers}}" scale="4" style="width: 100%; height: 100%;"></map>
</view>
```
----
####  3.js文件

```js
import {bdMapToTxMap} from './transform'        //经纬度精确转换
const app = getApp();
Page({
  data: {
    longitude: 121.368146, //默认定位经度
    latitude: 31.134899, //默认定位纬度
    markers: [],
  },
  
  // 点击标记点时触发
  clickMap(e) {
    const latitude = 114.65;
    const longitude = 268.36;
    let locationString = latitude + "," + longitude;
    wx.request({
      url: "https://apis.map.qq.com/ws/geocoder/v1/",
      data: {
        key: "****",  //腾讯服务中心的key
        location: locationString,
      },
      method: "GET",
      success: (r) => {
        //输出一下位置信息
        console.log(r);
        let address = r.data.result.address;
        console.log("用户位置信息", r.data.result.address);
        wx.openLocation({
          latitude,
          longitude,
          name: address,
          scale: 18,
        });
      },
      catch: (r) => {
        console.log(r)
      },
    });
  },
});

```