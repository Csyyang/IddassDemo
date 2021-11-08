import axios from '@/api/axios'


/**
 * 未读消息列表
 * @param { Object } data
 * @param { String } data.currentPage 页码
 * @returns { Promise } 
 */
export function messageList(data) {
    return axios.get('/api/bff/v1.2/enduser/portal/notification/unread/list?currentPage=1&title=&sender=')
}

