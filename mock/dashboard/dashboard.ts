import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';

const fakeDashBoard = {
  "remark": "开源等于互助；开源需要大家一起来支持，支持的方式有很多种，比如使用、推荐、写教程、保护生态、贡献代码、回答问题、分享经验、打赏赞助等；欢迎您加入我们！"
}


export default [
  // Mock Dashborad
  {
    url: '/admin/Dashboard/dashboard',
    timeout: 200,
    method: 'get',
    response: (body: any) => {
      const data = fakeDashBoard
      return resultSuccess(
        data
      )
    }
  }
] as MockMethod[]