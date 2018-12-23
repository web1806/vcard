// pages/edit-card/edit-card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // defaultQRPath: "/images/detail/ic_add.png",
    qrPath: "/images/detail/ic_add.png",
    hasQR: false,
    preview:{
      card_name:null,
      phone:null,
      email:null,
      company:null,
      title:null,
      address:null,
      official_website:null,
      operation_scope:null
    },

    maxlengths: [
      8, //name
      11, //phone
      25, //email
      , //qr
      28, //company
      10, //title
      28, //address
      150, //web
      20, //range
    ],

    inputTypes: [
      "text",
      "number",
      "text",
      "",
      "text",
      "text",
      "text",
      "text",
      "text"
    ],

    keys: [
      "姓名：",
      "电话：",
      "邮箱：",
      "微信二维码：",
      "单位：",
      "职位：",
      "地址：",
      "官网链接：",
      "经营范围："
    ],

    values: [
      "必须填写您的姓名",
      "必须填写联系方式",
      "请输入有效的邮箱号码",
      "",
      "必须填写您的单位",
      "必须填写您的职位",
      "请输入地址",
      "复制官网链接，黏贴到这里",
      "最多10个字"
    ],
  },

  tapToChooseImage(e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original'], //original原图，compressed压缩图
      sourceType: ['album', 'camera'], //album来源相册 camera相机 
      //成功时会回调
      success: function(res) {
        that.setData({
          qrPath: res.tempFilePaths,
          hasQR: true
        })
      },
    })
  },

  removeQR(e) {
    var that = this;
    that.setData({
      qrPath: "/images/detail/ic_add.png",
      hasQR: false
    })
  },
  inpt:function(e){
    let d=this.data.preview;
    switch(e.currentTarget.id){
      case '0':d.card_name=e.detail.value//是姓名
      break;
      case '1':d.phone=e.detail.value//手机号
      break;
      case '2':d.email=e.detail.value//邮箱
      break;
      case '4':d.company=e.detail.value//公司
      break;
      case '5':d.title=e.detail.value//职位
      break;
      case '6':d.address=e.detail.value//地址
      break;
      case '7':d.official_website=e.detail.value//官网链接
      break;
      case '8':d.operation_scope=e.detail.value//经营范围
    }
    this.setData({
      preview:d
    })
  },
  previewTap(e) {
    wx.navigateTo({
      url:"/pages/edit-preview/edit-preview?preview="+JSON.stringify(this.data.preview)+'&qr='+this.data.qrPath+'&id='+this.data.id
    })
  },
  saveTap(e) {
    wx.navigateTo({
      url:"/pages/card-detail/card-detail?preview="+JSON.stringify(this.data.preview)+'&qr='+this.data.qrPath+'&id='+this.data.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id:options.id
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
  onShareAppMessage: function() {

  }
})