import createAxios from '/@/utils/axios'
import { useAdminInfo } from '/@/stores/adminInfo'


/**
 * 
 * @description 获取用户信息和菜单列表权限
 * @returns 
 */
export function index() {
    return createAxios({
        url: '/admin/index/index',
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
        url: '/admin/index/login',
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
        url: '/admin/index/logout',
        method: 'POST',
        data: {
            refresh_token: adminInfo.getToken('refresh'),
        },
    })
}
