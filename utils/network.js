var toast = require("../utils/toast.js")

/**
 * 网络请求发送底层方法
 * 
 * url:请求url
 * 
 * method:请求的方式，需要纯大写字符串
 * 
 * withAuth:是否在header内携带authorization
 * 
 * params:请求参数
 * 
 * msg:加载状态的文字提示，不为空时显示loading
 * 
 * success:请求成功回调
 * 
 * fail:请求失败回调
 * 
 * complete:请求完成回调
 */
function request(url, method, withAuth, params, msg, success, fail, complete) {
  if (msg != null && msg != "") {
    wx.showLoading({
      title: msg,
    })
  } else {
    wx.showNavigationBarLoading()
  }

  var h = ({
    'content-type': 'application/json'
  })

  if (withAuth) {
    wx.getStorage({
      key: 'authorization',
      success: function(res) {
        h["authorization"] = res.data
      },
      fail: function() { //没有存储过读取时会失败
        //todo 重走登录流程
        //return
      }
    })
  }

  wx.request({
    url: url,
    method: method,
    header: h,
    data: params,
    success: function(res) {
      if (200 <= res.statusCode && res.statusCode < 300) {
        typeof success == "function" && success(res.data)
      } else {
        toast.show("网络加载失败")
      }
    },
    fail: function(res) {
      toast.show("网络加载失败")
      typeof fail == "function" && fail(res)
    },
    complete: function(res) {
      typeof complete == "function" && complete(res)
      if (msg != null && msg != "") {
        wx.hideLoading()
      } else {
        wx.hideNavigationBarLoading()
      }
    }
  })
}

module.exports = {
  request: request
}