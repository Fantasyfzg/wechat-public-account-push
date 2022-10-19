/* eslint-disable */
const USER_CONFIG = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: '',

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: '',

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: true,
    // 土味情话(彩虹屁)
    earthyLoveWords: true,
    // 朋友圈文案
    momentCopyrighting: true,
    // 毒鸡汤
    poisonChickenSoup: true,
    // 古诗古文
    poetry: true,

    /** 星座运势 */
    horoscope: true,

    /** 生日消息和节日消息 */
    birthdayMessage: true,

    // 学生课表
    courseSchedule: false,
  },

  /** 每日一言 */

  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: '',

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "我自己",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ocxn55wpJflejztilgcOPgELXBVc",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "1bCFm8Y53h08a62FaJcFZd_aNOOG8i85Bmg-yZYEBfo",
      // 所在省份
      province: "云南",
      // 所在城市
      city: "昆明",
      // 认识该好友的时间
      weChatFriendFirstDay: "2022-05-20",
      
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.cnblogs.com/Fantasyfzg/",
      
      // 倒数日
      customizedDateList: [
        // 距离元旦
        {
          "keyword": "new_year_day",
          date: "2023-01-01"
        },
        // 距离除夕
        {
          "keyword": "new_year_eve",
          date: "2023-01-21"
        },
        // 距离我的生日还有多少天
        {
          "keyword": "your_birthday",
          date: "2022-12-22"
        },
      ],
     
      // 我给对方的留言
      mywords: [{
        contents: [
          "明天会更好！",
          "加油，每一天都是不一样的精彩！",
          "乘风破浪会有时",
          "宁静致远",
          "跟随自己的内心",
        ]
      }]
    },
    {
      // 想要发送的人的名字
      name: "倩",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ocxn552q0Fbkrziw8hUyZUkLbkF8",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "rHPfbRBCEDyNG4Aubbcqzq01zaEohCGedta0bDiJ6c4",
      // 所在省份
      province: "云南",
      // 所在城市
      city: "呈贡区",
      // 认识该好友的时间
      weChatFriendFirstDay: "2022-08-31",
      
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.cnblogs.com/Fantasyfzg/",
     
      // 倒数日
      customizedDateList: [
        // 距离元旦
        {
          "keyword": "new_year_day",
          date: "2023-01-01"
        },
        // 距离除夕
        {
          "keyword": "new_year_eve",
          date: "2023-01-21"
        },
        // 距离你的生日还有多少天
        {
          "keyword": "your_birthday",
          date: "2023-07-14"
        },
      ],
     
      // 我给对方的留言
      mywords: [{
        contents: [
           "大哥好！大哥妙，大哥永远吃不饱！",
            "大哥天天开心！嘻嘻~~",
            "大哥有个卑微小弟。",
            "希望大哥雨露均沾~~",
            "永远年轻！beautiful！！！",
            "若似月明终皎洁，不辞冰雪为卿热。",
            "水星记： 还有多远才能进入你的心？",
            "水星记： 还有多久才能和你接近？",
            "人生最幸运的事：喜欢的人也喜欢你；可惜老天爷忘了眷顾我",
            "遗憾总会有，热情也会消散，但是每一天依旧精彩。",
            "最轻松的时候莫过于，不对任何人抱有任何期待。",
            "能不能别高冷了好吗？不要把自己心藏起来。"
        ]
      }]
    },
  {
      // 想要发送的人的名字
      name: "费佳红",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ocxn557fVID0sg7ASWVULuJYdcBo",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "Q-R2kE0Kurg0EbJYGKbIH4kAA8GYsfVnd4IXxr0ySbE",
      // 所在省份
      province: "浙江",
      // 所在城市
      city: "德清县",
      // 认识该好友的时间
      weChatFriendFirstDay: "2020-05-31",
      
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.cnblogs.com/Fantasyfzg/",
     
       // 倒数日
      customizedDateList: [
        // 距离元旦
        {
          "keyword": "new_year_day",
          date: "2023-01-01"
        },
        // 距离除夕
        {
          "keyword": "new_year_eve",
          date: "2023-01-21"
        },
         // 距离你的生日还有多少天
        {
          "keyword": "your_birthday",
          date: "2023-03-29"
        },
      ],
      
      // 我给对方的留言
      mywords: [{
        contents: [
            "乐观的生活，会更精彩！",
            "要幸福！",
            "要开心！",
            "要快乐！",
            "Je t'aime ．",
            "永远年轻！beautiful！！！",
            "若似月明终皎洁，不辞冰雪为卿热。",
            "水星记： 还有多远才能进入你的心？",
            "水星记： 还有多久才能和你接近？",
            "遗憾总会有，热情也会消散，但是每一天依旧精彩。",
            "最轻松的时候莫过于，不对任何人抱有任何期待。"          
        ]
      }]
    },
  {
      // 想要发送的人的名字
      name: "郑永",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ocxn55x9GauzdiuUze-cCjXOr9fY",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "b6jjatOwxubmhwwA86ULjnz8Jao_ppslBKlgy0Oe6TA",
      // 所在省份
      province: "云南",
      // 所在城市
      city: "镇雄县",
      // 认识该好友的时间
      weChatFriendFirstDay: "2020-07-24",
      
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.cnblogs.com/Fantasyfzg/",
     
      // 倒数日
      customizedDateList: [
        // 距离元旦
        {
          "keyword": "new_year_day",
          date: "2023-01-01"
        },
        // 距离除夕
        {
          "keyword": "new_year_eve",
          date: "2023-01-21"
        },
         // 距离你的生日还有多少天
        {
          "keyword": "your_birthday",
          date: "2023-10-08"
        },
      ],
     
      // 我给对方的留言
      mywords: [{
        contents: [
            "乐观的生活，会更精彩！",
            "要幸福！",
            "要开心！",
            "要快乐！",
            "永远年轻！beautiful！！！",
            "遗憾总会有，热情也会消散，但是每一天依旧精彩。",  
            "哪时候把你BF的照片发来看看嘛，然后期待官宣，快结婚吧哈哈哈！"
        ]
      }]
    },
    
   {
      // 想要发送的人的名字
      name: "彭璐瑶",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ocxn55106HOVPNOcGjz9URulbJl8",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "V6mEm5bpanvq8OQykzRHW4RDA5npruylw-9M3OeB07I",
      // 所在省份
      province: "云南",
      // 所在城市
      city: "鲁甸县",
      // 认识该好友的时间
      weChatFriendFirstDay: "2022-05-26",
      
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.cnblogs.com/Fantasyfzg/",
     
      // 倒数日
      customizedDateList: [
        // 距离元旦
        {
          "keyword": "new_year_day",
          date: "2023-01-01"
        },
        // 距离除夕
        {
          "keyword": "new_year_eve",
          date: "2023-01-21"
        },
      ],
     
      // 我给对方的留言
      mywords: [{
        contents: [      
            "永远年轻！beautiful！！！",
            "天天开心！！！",
            "每天好心情！！！",
            "期待一起干饭！",
            "啥时候介绍一下你帅帅的男朋友",
            "优秀的人始终优秀！"
        ]
      }]
    },
   {
      // 想要发送的人的名字
      name: "朱云春",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ocxn551EsELtr44n1ZjlJB0JRllY",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "V6mEm5bpanvq8OQykzRHW4RDA5npruylw-9M3OeB07I",
      // 所在省份
      province: "云南",
      // 所在城市
      city: "昆明",
      // 认识该好友的时间
      weChatFriendFirstDay: "2022-04-27",
      
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.cnblogs.com/Fantasyfzg/",
     
      // 倒数日
      customizedDateList: [
        // 距离元旦
        {
          "keyword": "new_year_day",
          date: "2023-01-01"
        },
        // 距离除夕
        {
          "keyword": "new_year_eve",
          date: "2023-01-21"
        },
      ],
     
      // 我给对方的留言
      mywords: [{
        contents: [      
            "永远年轻！beautiful！！！",
            "天天开心！！！",
            "每天好心情！！！",
            "做一个不要轻易被情绪左右的人。",
            "啥时候介绍一下你帅帅的男朋友",
            "优秀的人始终优秀！"
        ]
      }]
    },
    
    // 这是每一个user的模板
//     {
//       // 想要发送的人的名字
//       name: "我自己",
//       // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
//       id: "ocxn55wpJflejztilgcOPgELXBVc",
//       // 你想对他发送的模板消息的模板ID
//       useTemplateId: "X-qVI9toy2QvgYJIxGKWbocWZjj-aMUEA3eHN4iTpXo",
//       // 所在省份
//       province: "云南",
//       // 所在城市
//       city: "镇雄县",
//       // 认识该好友的时间
//       weChatFriendFirstDay: "2022-05-20",
//       // 新历生日, 仅用作获取星座运势, 格式必须
//       horoscopeDate: '07-03',
//       // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
//       horoscopeDateType: '今日',
//       // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
//       openUrl: "https://www.cnblogs.com/Fantasyfzg/",
//       // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
//       festivals: [
//         // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
//         {
//           "type": "*生日",
//           "name": "老婆",
//           "year": "1996",
//           "date": "09-09"
//         },
//         {
//           "type": "节日",
//           "name": "结婚纪念日",
//           "year": "2020",
//           "date": "09-03"
//         },
//         // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           "type": "生日",
//           "name": "李四",
//           "year": "1996",
//           "date": "09-31"
//         },
//         {
//           "type": "节日",
//           "name": "被搭讪纪念日",
//           "year": "2021",
//           "date": "09-01"
//         },
//       ],
//       // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
//       customizedDateList: [
//         // 在一起的日子
//         {
//           "keyword": "love_day",
//           date: "2022-09-08"
//         },
//         // 结婚纪念日
//         {
//           "keyword": "marry_day",
//           date: "2022-09-09"
//         },
//         // 退伍日
//         {
//           "keyword": "ex_day",
//           date: "2022-09-10"
//         },
//         // 距离元旦
//         {
//           "keyword": "new_year_day",
//           date: "2023-01-01"
//         },
//         // 距离除夕
//         {
//           "keyword": "new_year_eve",
//           date: "2023-01-21"
//         },
//       ],
//       // 我给对方的留言
//       mywords: [{
//         contents: [
//           "明天会更好！",
//           "加油，每一天都是不一样的精彩！",
//           "乘风破浪会有时",
//           "宁静致远",
//           "跟随自己的内心",
//         ]
//       }]
//     },
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: '自己',
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: '广东',
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: '惠州',

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   *
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   *
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   *
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {
      type: '*生日', name: '老婆', year: '1996', date: '09-09', isShowAge: true,
    },
    {
      type: '节日', name: '结婚纪念日', year: '2020', date: '09-03',
    },
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    {
      type: '生日', name: '李四', year: '1996', date: '09-31', isShowAge: true,
    },
    {
      type: '节日', name: '被搭讪纪念日', year: '2021', date: '09-01',
    }
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
   * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    { keyword: 'love_day', date: '2022-09-08' },
    // 结婚纪念日
    { keyword: 'marry_day', date: '2022-09-09' },
    // 退伍日
    { keyword: 'ex_day', date: '2022-09-10' }
    // 你可以不断按格式往下增加
    // ...
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
   * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气'
      ],
    },
//     {
//       "keyword": "mywords",
//       contents: [
//           "大哥好！大哥妙，大哥永远吃不饱！",
//           "大哥天天开心！嘻嘻~~",
//           "大哥有个卑微小弟。",
//           "希望大哥雨露均沾~~",
//           "永远年轻！beautiful！！！",
//       ]
//     },
    // 你可以不断按格式往下增加
    // ...
  ],
  // 默认的课表配置
  COURSE_SCHEDULE: null
}

module.exports = USER_CONFIG

