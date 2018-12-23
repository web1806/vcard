// pages/card-detail/card-detail.js
var cardsData = require("../../data/default-cards-data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomIcons: ["/images/detail/ic_card_qr.png",
      "/images/detail/ic_editor.png",
      "/images/detail/ic_replace.png",
      "/images/detail/ic_send.png",
      "/images/detail/ic_trash.png"
    ],
    bottomTexts: ["名片码",
      "编辑",
      "更换模板",
      "发送",
      "删除",
    ],
  },

  bottomTap(e) {
    switch (e.target.id) {
      case 0: //名片码

        break;
      case "1": //编辑
        wx.navigateTo({
          url: '/pages/edit-card/edit-card?id='+this.data.cd.index
        })
        break;
      case 2: //更换模板

        break;
      case 3: //发送
        
        break;
      case 4: //删除

        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var index = options.index;
    var cardData = cardsData.defCardsData[index]
    this.setData({
      cd: cardData
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
  bottomTap(e){
    //console.log(e.currentTarget.id)
    if(e.currentTarget.id=="3"){
        wx.showShareMenu({
      
        })
    }
    if(e.currentTarget.id=="1"){
      wx.navigateTo({
        url: '/pages/edit-card/edit-card?id='+this.data.cd.index
      })
    }
    if(e.currentTarget.id=="4"){
      var delId=this.data.cd.index
      var dataCd=this.data.cd
      //console.log(dataCd)
      var arr=[]
      for(let i in dataCd){
        arr.push(dataCd[i])
      }
      arr.splice(delId,1)
        this.setData({
          cd:arr
        })
    }
    if(e.currentTarget.id=="0"){
      this.setData({
        showModal: true
      })
    }
  },
  // showDialogBtn: function () {

  //   this.setData({
  //     showModal: true
  //   })
  // },
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
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
      if(res.from==="button") {
          return {
            title:"hello",
            path:'111'
        }
      }
    }
})