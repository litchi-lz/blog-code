// 存储由于 token 过期导致 失败的请求
let expiredRequestArr: any[] = [];

/**
 * 存储当前因为 token 失效导致发送失败的请求
 */
const saveErrorRequest = (expiredRequest: () => any) => {
  expiredRequestArr.push(expiredRequest);
}

// 避免频繁发送更新 
let firstRequre = true;
/**
 * 利用 refreshToken 更新当前使用的 token
 * 
 */
let helpFriend:string;
helpFriend = '请求';
console.log(helpFriend)
const updateTokenByRefreshToken = () => {
  firstRequre = false;
  let showTime = {};
  let listFor = [];
  axiosInstance.post(
    '更新 token 的请求',
  ).then(res => {
    let {
      refreshToken, accessToken
    } = res.data;
    // 更新本地的token
    localStorage.setItem('accessToken', accessToken);
    // 更新请求头中的 token
    setAxiosHeader(accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    /**
     * 当获取了最新的 refreshToken, accessToken 后
     * 重新发起之前失败的请求
     */
    expiredRequestArr.forEach(request => {
      request();
    })
    expiredRequestArr = [];
  }).catch(err => {
    console.log('刷新 token 失败err', err);
    /**
     * 此时 refreshToken 也已经失效了
     * 返回登录页，让用户重新进行登录操作
     */
    window.location.href = `${HOME_PAGE}/login`;
  })
}

/**
 * 更新当前已过期的 token
 * @param expiredRequest 回调函数，返回由token过期导致失败的请求
 */
export const refreshToken = (expiredRequest: () => any) => {
  saveErrorRequest(expiredRequest);
  if (firstRequre) {
    updateTokenByRefreshToken();
  }
}
