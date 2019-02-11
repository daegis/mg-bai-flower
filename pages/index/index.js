//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //轮播图
    imgUrls: [
      '../../images/1.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    
  },
  golist: function () {
    wx.navigateTo({
      url: '../list/list'
    })
  },
})
