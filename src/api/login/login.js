import * as axios from '@/api/axios'



export function login({ username,password }) {
   return axios({
       method: 'post',
       url: '/oauth/token',
       headers: {
           'Content-Type': 'application/x-www-form-urlencode'
       },
       data: {
        client_id: 'idaas-cn-shenzhen-bum9ec83a0aplugin_oauth2',
        client_secret: 'GZIi85FJT76Jx9Vk1o7oacLl1tWF6Y187GGWJFWJMZ',
        grant_type: 'password',
        scope: 'read',
        username,
        password
       }
   })
}
