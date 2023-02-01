import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';


export default [
  // mock login
  {
    url: '/admin/index/login',
    timeout: 200,
    method: 'post',
    response: (body: any) => {
      const { username, password } = body
      //对的用户 登录成功
      if(username === 'admin' && password === '123456') {
        return resultError('用户名或密码错误！')
      } else {
        const data = {
          "userInfo": {
            "id": 1,
            "username": "admin",
            "nickname": "Admin",
            "avatar": "https:\/\/demo.buildadmin.com\/static\/images\/avatar.png",
            "lastlogintime": "2023-02-01 10:30:04",
            "token": "9fc4684d-979b-47ff-9ce4-b90997fa9333",
            "refreshToken": ""
          },
          "routePath": "\/admin"
        }
        return resultSuccess(
          data,
          {
            msg: '登录成功！',
            time: '1675218605'
          }
        )
      }
    }
  }
] as MockMethod[]