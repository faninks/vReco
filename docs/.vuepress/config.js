const themeConfig = require('./config/theme/')

module.exports = {
  base: '/vReco/',
  title: "度墨",
  description: 'Enjoy a piece of land of your own. -- The simple life',
  dest: 'docs/.vuepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    // 语言
    ['@vuepress/plugin-pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    // 图片放大
    ['@vuepress/medium-zoom', 'flowchart'],
    // 看板娘
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang', 
      {
        // 默认模型主题
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
      }
    ],
    // 音乐bgm
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          // 本地文件示例
          {
            name: '장가갈 수 있을까',
            artist: '咖啡少年',
            url: '/vReco1/bgm/1.mp3',
            cover: '/vReco/bgm/1.jpg'
          },
          // 网络文件示例
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]  
      }
    ]
  ] 
}  