function show(msg) {
  wx.showToast({
    title: msg,
    icon: none,
    duration: 2000
  })
}

module.exports = {
  show: show
}