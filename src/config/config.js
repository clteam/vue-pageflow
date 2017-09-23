const hostname = window.location.hostname
const protocol = window.locatioin.protocol
console.log(protocol)
const domains = ['domain1.com', 'domain2.com', 'domain3.com']

const devAPI = ['http://chelun.com/', 'http://kjzwxdev.eclicks.cn/', 'http://10.10.11.115:3000/', 'http://zhushou.weixin.chaojijiaolian.cn.chelun.com/']

export const API_ROOT = (domains.indexOf(hostname) > -1) ? 'http://api.domain.com/' : devAPI[0]
