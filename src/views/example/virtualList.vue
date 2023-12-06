<template>
  <div class="box">
    <el-table
      v-el-table-infinite-scroll="load"
      height="600"
      :data="tableData"
      border
      style="width: 80%"
      v-loading="loading"
      element-loading-text="数据量太大啦，客官稍后..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(255, 255, 255, 0.5)"
      :header-cell-style="{
        height: '24px',
        lineHeight: '24px',
        color: '#606266',
        background: '#F5F5F5',
        fontWeight: 'bold',
      }"
    >
      <el-table-column type="index" label="序"></el-table-column>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="value" label="对应值"></el-table-column>
    </el-table>
  </div>
</template>

<script>

// 分堆函数
function averageFn(arr) {
  let i = 0;
  let result = [];
  while (i < arr.length) {
    result.push(arr.slice(i, i + 10)); // 一次截取10个用于分堆
    i = i + 10; // 这10个截取完，再准备截取下10个
  }
  return result;
}

export default {
  data() {
    return {
      allTableData: [], // 初始发请求获取所有的数据
      tableData: [], // 要展示的数据
      loading: false,
    };
  },
  // 第一步，发请求，获取大量数据，并转成二维数组，分堆分组分块存储
  async created() {
    this.loading = true;

    const res = await axios.get("http://ashuai.work:10000/bigData");
    this.allTableData = averageFn(res.data.data); // 使用分堆函数，存放二维数组
    // this.originalAllTableData = this.allTableData // 也可以存一份原始值，留作备用，都行的
    this.loading = false;
    // 第二步，操作完毕以后，执行触底加载方法
    this.load();
  },
  methods: {
    // 初始会执行一次，当然也可以配置，使其不执行
    async load() {
      console.log("自动多次执行之，首次执行会根据高度去计算要执行几次合适");
      // 第五步，触底加载相当于把二维数组的每一项取出来用，取完用完时return停止即可
      if (this.allTableData.length == 0) {
        console.log("没数据啦");
        return;
      }
      // 第三步，加载的时候，把二维数组的第一项取出来，拼接到要展示的表格数据中去
      let arr = this.allTableData[0];
      this.tableData = this.tableData.concat(arr);
      // 第四步，拼接展示以后，再把二维数组的第一项的数据删除即可
      this.allTableData.shift();
    },
  },
};
</script>
