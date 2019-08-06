import request from '@/utils/request'

export function fetchOaTaskList(query) {
  return request({
    url: '/oaTask/list',
    method: 'get',
    params: query
  })
}
