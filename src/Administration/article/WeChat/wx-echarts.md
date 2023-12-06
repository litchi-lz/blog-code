##### 1.自定义一个组件
######  curve-control.json 文件
```js
{
   "component": true,
   "usingComponents": {
    "ec-canvas":"../../ec-canvas/ec-canvas"
   }
}
```
----
###### curve-control.wxml 文件
```html
<ec-canvas style="" id="mychart-dom-line" canvas-id="mychart-line" ec="{{ ec }}"></ec-canvas>
```
----
###### curve-control.js 文件
```js
// 引入echarts
import * as echarts from '../../ec-canvas/echarts'
const getPixelRatio = () => {
  let pixelRatio = 0
  wx.getSystemInfo({
    success: function (res) {
      pixelRatio = res.pixelRatio
    },
    fail: function () {
      pixelRatio = 0
    }
  })
  return pixelRatio
}
let dpr = getPixelRatio()

Component({
  /**
 * 组件的属性列表
 */
  properties: {
    dataList: { // 图表的数据
      type: Array,
      value: [],
    },
    config: {  //修改配置信息
      type: Object,
      value: {}
    },
    yAxis: { // y轴
      type: Object,
      value: {
        x: 'center',
        type: 'value',
        minInterval: 1,
        splitLine: { lineStyle: { type: 'dashed' } },
        nameTextStyle: {
          fontSize: 10,
          color: "#80858D"
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#80858D",
            width: 0,
            type: "solid"
          }
        },
        axisTick: {
          show: true
        }
      }
    },
    xAxis: {
      type: Array,
      value: [] //可设置默认值
    },
    legend: {
      type: Array,
      value: [] //可设置默认值
    },
    colorList: {
      type: Array,
      value: ["#069bec", "#ae45dc", "#30a671", "#e7d024", "#f86515"],
    }
  },

  /**
  * 组件的初始数据
  */
  data: {
    ec: {
      onInit: null
    }
  },

  /**
   * 监听dataList 数据的变化从而对echarts 的重新渲染 
   */
  observers: {
    'dataList': function (dataList) {
      if (this.chart) {
        // 判断是否已经初始化过图标，如果已经初始化过了，那就直接闯入当前需要渲染的option
        this.chart.setOption(this.createOptions());
        return
      }

      this.setData({
        ec: {
          onInit: this.initChart.bind(this)
        }
      });

    }
  },
  lifetimes: {

  },
  /**
  * 组件的方法列表
  */
  methods: {
    initChart(canvas, width, height, dpr) {

      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });

      canvas.setChart(chart);
      let option = this.createOptions();
      this.chart = chart;
      chart.setOption(option);
      return chart;
    },

    createOptions() {
      return {
        // 调色盘颜色列表
        color: this.data.colorList,
        legend: {
          data: this.data.legend,
          bottom: 0, // legend在下方
          left: 'center', // 居中
          icon: 'pin', // 小圆点
          backgroundColor: '#fff',
          z: 100
        },
        grid: {
          top: '10%',
          left: '4%',
          height: 160,
          containLabel: true
        },
        tooltip: {
          // 点击之后的浮窗
          show: true,
          trigger: 'axis',
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: "#fff",
          textStyle: {
            color: "#fff" //设置文字颜色
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          offset: 6,
          axisTick: {
            show: false
          },
          axisLine: {
            // x轴线的颜色以及宽度
            show: true,
            lineStyle: {
              color: "#80858D",
              width: 1,
              type: "solid"
            }
          },
          // axisLabel:{
          //     interval: this.data.xAxis.length > 9 ? Math.floor(this.data.xAxis.length / 4) : 0,
          //     showMinLabel: true,  //是否显示最小 tick 的 label
          //   // showMaxLabel: true,  //是否显示最大 tick 的 label
          // },
          data: this.data.xAxis,
          // show: false
        },
        yAxis: this.data.yAxis,
        series: this.data.dataList
      }
    },
  }
})

```
----

##### 2. 当前页面这使用改组件
###### index.json
```js
{
  "usingComponents": {
    "curve-control":"/component/curve-control/curve-control"
  },
}
```
---
###### index.wxml

```html
<view class="echart_panel">
      <curve-control xAxis="{{currentxAxis}}" dataList="{{currentSeries}}" ></curve-control>
</view>
/*父元素需要宽高，否则无法显示*/
```
-----

```js

Page({

   /**
    * 页面的初始数据
    */
 data: {
    currentxAxis:[],
    currentSeries:[],
    currentConfig:{},
   },
})
```