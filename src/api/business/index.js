import axios from '@/api/axios'

export function appList(access_token) {
    return axios({
        method: 'get',
        url: '/api/bff/v1.2/enduser/portal/sso/app_list',
        headers: {
            'authorization': 'Bearer ' + access_token
        }
    })
}
