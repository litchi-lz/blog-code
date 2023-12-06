const config = {
    /**
     * api请求基础路径
     */
    baseUrl: {
      // 开发环境接口前缀
      base: '',
  
      // 打包开发环境接口前缀
      dev: '',
  
      // 打包生产环境接口前缀
      pro: '',
  
      // 打包测试环境接口前缀
      test: ''
    },
  
    /**
     * 接口请求超时时间
     */
    requestTimeout: 30000,
  
    /**
     * 默认接口请求类型
     * 可选值：application/x-www-form-urlencoded multipart/form-data
     */
    defaultHeaders: 'application/json'
  }
  
  export { config }
  