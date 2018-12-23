var net = require("../utils/network.js")
var app = getApp()

function findByUserId(userId, success) {
  net.request(app.globalData.baseUrl + "card/findbyuserid/" + userId, "GET", true, "加载中", null,
    success,
    function() {},
    function() {})
}

module.exports = {
  findByUserId: findByUserId
}