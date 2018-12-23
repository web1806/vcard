// pages/my card/my-card.js
var cardsData = require("../../data/default-cards-data.js")
var net = require("../../apis/card.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    currentCard: 0,
    tabData: ["普通版", "VIP版"]
  },

  bindchange(e) {
    this.setData({
      currentCard: e.detail.current
    })
    if (this.data.currentCard >= 3) { //VIP
      this.setData({
        currentTab: 1
      })
    } else { //普通版
      this.setData({
        currentTab: 0
      })
    }
  },

  tabTap(e) {
    if (this.data.currentTab == e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current,
        // currentCard: this.data.currentTab == 0 ? 0 : 1
      })
      if (this.data.currentTab == 0) { //普通版
        this.setData({
          currentCard: 0
          // currentCard: e.target.dataset.current
        })
      } else if (this.data.currentTab == 1) { //VIP
        this.setData({
          currentCard: 3
          // currentCard: e.target.dataset.current
        })
      }
    }
  },

  cardTap(e) {
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/card-detail/card-detail?index=' + index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.login({
      sucess: function(res) {
        if (res.code) {

        } else {
          console.log("login failed!")
        }
      }
    })

    this.setData({
      defaultCardsData: cardsData.defCardsData
    })

    net.findByUserId(1, function(data) {
      console.log(data)
    })

    wx.require({
      url:'/api/AppCduser!loadOne.ajax',
      header: {'content-type': 'application/json'},
      success: function(res) {
        console.log(res)
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    if(res.from==="button") {
      console.log(res.target)
    }
    return {
      title:"自定义",
      path:'111'
    }
  }
})