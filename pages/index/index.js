Page({
  data: {
    imgUrls: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.png"
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

  classlist: [
    {
      imgsrc: "/images/10.png",
      text: "热门"
    },
    {
      imgsrc: "/images/22.png",
      text: "口红"
    },
    {
      imgsrc: "/images/5.png",
      text: "眼影"
    },
    {
      imgsrc: "/images/6.png",
      text: "美妆蛋"
    },
    {
      imgsrc: "/images/12.png",
      text: "面膜"
    },
    {
      imgsrc: "/images/8.png",
      text: "睫毛刷"
    },
    {
      imgsrc: "/images/13.png",
      text: "洗面奶"
    },
    {
      imgsrc: "/images/7.png",
      text: "香水"
    },
    {
      imgsrc: "/images/9.png",
      text: "化妆刷"
    },
    {
      imgsrc: "/images/18.png",
      text: "更多"
    }
  ]
  }
})