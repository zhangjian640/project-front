import request from '@/utils/request'

/**
 * 获取验证码
 * @param data
 */
export function getCaptcha (data) {
  return request({
    url: '/getCaptcha',
    method: 'get',
    data
  })
}
/**
 * 忘记密码
 * @param data
 */
export function forget (data) {
  return request({
    url: '/forget',
    method: 'post',
    data
  })
}
