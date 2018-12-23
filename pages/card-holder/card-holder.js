// pages/card-holder/card-holder.js
var testData = require("../../data/test-card-holder-data.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabData: ["全部", "客户", "好友", "同事", "同学"],
    PopupData:["开始","客户", "好友", "同事", "同学", "取消"],
    currentTab: 0,
    currentItem: 0,
    winWidth: 0,
    winHeight: 0,
    friendsCountText: [
      "共",
      0,
      "个好友"
    ]
  },

  onPageScroll: function (e) {
    console.log(e)
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  //回到顶部
  goTop: function (e) {  // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },

  tabTap(e) {
    if (this.data.currentTab == e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  bindChange(e) {
    this.setData({
      currentTab: e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: (750 / res.windowWidth) * res.windowHeight
        });
      }
    });

    this.setData({
      testCardData: testData.testCHData
    })

  },
  tel:function(){
    wx.makePhoneCall({
      phoneNumber: '1254999999',
    })
  },
  // 底部弹窗
  showDialogBtn: function () {
    
    if(this.data.currentTab!=0){
      this.setData({
        showModal: true
      })
    }
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function (e) {
    if(e.currentTarget.id==5){
      this.hideModal();
    }else{
      wx.showToast({
        title: '移动成功',
        icon: 'success',
        duration: 2000
      })
      this.hideModal();
    }
  },
  /**
   * 对话框确认按钮点击事件
   */
  // onConfirm: function (e) {
    
  // },

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
  onShareAppMessage: function() {

  }
})