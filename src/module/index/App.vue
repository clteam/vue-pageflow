<template lang="html">
  <div class="page">
  </div>
</template>

<script>
import Utils from '../../libs/utils'
const _wx = window._wx
export default {
  data: function () {
    return {
      param: {
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera']
      },
      openid: Utils.getQueryString('openid'),
      hideParam: ['menuItem:share:appMessage', 'menuItem:share:timeline', 'menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:facebook', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email', 'menuItem:share:brand']
    }
  },
  beforeCreate () {
    if (!_wx.isWx) {
      window.location.href = 'error.html'
    }
  },
  created () {
    _wx.hideMenus(this.hideParam)
  },
  computed: {
    href0 () {
      return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx33b31f7b21a1d52d&redirect_uri=http%3A%2F%2Fzhushou.weixin.chaojijiaolian.cn%2Findex%2Fdetail%3Fstate%3D%26supersign%3D%26cardmodel%3D%26appversion%3D&response_type=code&scope=snsapi_base&state=#wechat_redirect'
    },
    href1 () {
      return `tposter.html?openid=${this.openid}`
    },
    href2 () {
      return `uposter.html?openid=${this.openid}`
    }
  },
  methods: {
    goTpl0 () {
      Utils.countBaidu('教练海报', 'click', '基础模板', '')
    },
    goTpl1 () {
      Utils.countBaidu('教练海报', 'click', '学车好时节', '')
    },
    goTpl2 () {
      Utils.countBaidu('教练海报', 'click', '再不学车就晚了', '')
    }
  },
  components: {}
}
</script>

<style lang="scss">
@import "../../assets/scss/main.scss";
</style>
