import axios from '@/api/axios'
import qs from 'qs'

/**
 * 登录接口
 * @param { object } user
 * @param { string } user.username 用户名
 * @param { string } user.password 密码
 * @returns { Promise<object> } 
 */
export function login(user) {
    return axios({
        method: 'post',
        url: '/oauth/token',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(user)
    })
}

