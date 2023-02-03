import createAxios from '/@/utils/axios'
import { useAdminInfo } from '/@/stores/adminInfo'

const controllerUrl = '/admin/index/'

/**
 * 
 * @description 获取用户信息和菜单列表权限
 * @returns 
 */
export function index() {
    return createAxios({
        url: controllerUrl + 'index',
        method: 'get',
    })
}

/**
 * 
 * @description 登录
 * @param method 
 * @param params 
 * @returns 
 */
export function login(method: 'get' | 'post', params: object = {}): ApiPromise {
    return createAxios({
        url: controllerUrl + 'login',
        data: params,
        method: method,
    }) as ApiPromise
}

/**
 * 
 * @description 登出
 * @returns 
 */
export function logout() {
    const adminInfo = useAdminInfo()
    return createAxios({
        url: controllerUrl + 'logout',
        method: 'POST',
        data: {
            refresh_token: adminInfo.getToken('refresh'),
        },
    })
}
