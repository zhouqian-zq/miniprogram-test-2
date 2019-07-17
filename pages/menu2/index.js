var app=getApp()
Page
({
  data: {
  navbar:['今日推荐','时尚','国际','美妆','母婴','居家'],
  currentTab:0,
    imgUrls: [
      "/images/201.jpg",
      "/images/202.jpg",
      "/images/203.jpg",
      "/images/204.jpg"
    ],
    interval: 1000,
    duration: 500,
    changeIndicatorDots: function (e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function (e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange: function (e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function (e) {
      this.setData({
        duration: e.detail.value
      })
    },
  },
navarTap:function(e)
{
  console.debug(e);
  this,setData({
  currentTab:e.currentTarget.dataset.idx
})
},
})