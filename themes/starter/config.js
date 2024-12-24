/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '/images/starter/logo/logo.png', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '/images/starter/logo/logo-w.png', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg
  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU
  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '智意达 | 让一部分酒店人先用上 AI', // 英雄区文字
  STARTER_HERO_TITLE_2: '自贸港政策专家|酒店智能助理|收益管理专家', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '酒店智能助理', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL: 'https://zsk.begs.cn/chat/share?shareId=augem081tlh7y82lcr8dxxuc', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '收益管理专家', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://zsk.begs.cn/chat/share?shareId=vkxiuc2zhuoxedqecc6ovmwu', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空
  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/home.jpg', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图
  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '了解智意达',
  STARTER_NAV_BUTTON_1_URL: 'https://ai.hotelcases.cn', // 您可以指定一个具体的URL
  STARTER_NAV_BUTTON_2_TEXT: '联系我们',
  STARTER_NAV_BUTTON_2_URL: '/about', // 您可以指定一个具体的URL
  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '特性', // 特性
  STARTER_FEATURE_TEXT_1: '智意达的主要特性', // 特性
  STARTER_FEATURE_TEXT_2:
    '利用先进的NLP技术和深度学习算法，为酒店行业提供智能化解决方案，提升运营效率和服务质量。', // 特性

  STARTER_FEATURE_1_TITLE_1: '酒店智能助理', // 特性1
  STARTER_FEATURE_1_TEXT_1: "利用先进的NLP技术，实现与用户的自然对话，提供即时、准确的客户服务。", // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '#', // 特性1

  STARTER_FEATURE_2_TITLE_1: '酒店收益管理', // 特性2
  STARTER_FEATURE_2_TEXT_1: '通过深度学习算法对运营数据进行深度分析，帮助酒店洞察业务趋势，优化决策。', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: '#', // 特性2

  STARTER_FEATURE_3_TITLE_1: '更懂得酒店的运营', // 特性3
  STARTER_FEATURE_3_TEXT_1: '接入酒店行业数据专项训练的AI大模型', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://zsk.begs.cn/chat/share?shareId=augem081tlh7y82lcr8dxxuc', // 特性3

  STARTER_FEATURE_4_TITLE_1: '更了解酒店的数据', // 特性4
  STARTER_FEATURE_4_TEXT_1: '基于数万篇酒店行业报告的分析数据', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://zsk.begs.cn/chat/share?shareId=vkxiuc2zhuoxedqecc6ovmwu', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '一套轻量实用的酒店智能助理解决方案',
  STARTER_ABOUT_TEXT:
    '智意达的愿景是帮助酒店更低成本和更快速地使用酒店行业垂直领域的专业 AI，帮助您将自己的产品与故事高效地传达给世界。 <br /> <br /> 专业的智能助理，高效的AI模型',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: 'https://zsk.begs.cn/chat/share?shareId=ie34m7dyg5em9hktjcb04kqf',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '70+',
  STARTER_ABOUT_TIPS_2: '酒店伙伴',
  STARTER_ABOUT_TIPS_3: '正在线上使用',
  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。',
  STARTER_PRICING_1_TITLE: '基础版',
  STARTER_PRICING_1_PRICE: '免费',
  STARTER_PRICING_1_PRICE_CURRENCY: '',
  STARTER_PRICING_1_PRICE_PERIOD: '',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '适合初试水的企业，提供基本的智能客服和数据分析功能。', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即使用',
  STARTER_PRICING_1_BUTTON_URL: 'https://zsk.begs.cn/chat/share?shareId=ie34m7dyg5em9hktjcb04kqf',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '专业版',
  STARTER_PRICING_2_PRICE: '￥3599',
  STARTER_PRICING_2_PRICE_CURRENCY: '',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '提供专业的API接入您自己的内部应用', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '联系我们',
  STARTER_PRICING_2_BUTTON_URL: 'https://ai.hotelcases.cn/',

  STARTER_PRICING_3_TITLE: '企业版',
  STARTER_PRICING_3_PRICE: '￥8599',
  STARTER_PRICING_3_PRICE_CURRENCY: '',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '定制贵酒店的专属 AI 大模型', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '联系我们',
  STARTER_PRICING_3_BUTTON_URL: 'https://ai.hotelcases.cn/',
  
  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '我们酒店选择了 智意达 提供的AI服务,帮助酒店优化了管理，极大地提升了运营效率',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标
  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '「智意达 为我们节省了数百小时的工作时间，并让我们获得了从未想到过的洞察力"」。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://unionavatars.com/wp-content/uploads/2024/10/sienna-realistic-avatar-testimonial.webp',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '安妮-斯坦纳',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '绿色足迹首席执行官',
      STARTER_TESTIMONIALS_ITEM_URL: '#' // 您可以指定一个具体的URL
    },
    // ... (其他用户评价项)
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '「通过接入智意达的AI能力，不仅帮助我们提供收益管理上的数据分析及建议，还解决了大部分岗位员工的工作需求。"」。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://unionavatars.com/wp-content/uploads/2024/10/realme77-realistic-avatar-testimonial-users.webp',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Cindy Chen',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'XX酒店HRM',
      STARTER_TESTIMONIALS_ITEM_URL: '#' // 您可以指定一个具体的URL
    },    
  ],
  // FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '酒店常见问题',
  STARTER_FAQ_TEXT_1: '或许在这里可以找到答案',
  STARTER_FAQ_TEXT_2: '智意达的核心业务介绍',
  STARTER_FAQ_1_QUESTION: '智意达的核心业务是什么？',
  STARTER_FAQ_2_QUESTION: '行业政策那么多，更新那么频繁，我如何把握最新资讯？',
  STARTER_FAQ_3_QUESTION: '我需要24小时精准回复客户，该怎么做？',
  STARTER_FAQ_4_QUESTION: '我如何使用AI为酒店赋能？',
  STARTER_FAQ_1_ANSWER:
    '智意达 旨在构建一个集成了自然语言处理（NLP）、深度学习（DL）与知识库管理（KBM）的创新平台，为各类企业和个人用户提供全面、智能的服务体验。',
  STARTER_FAQ_2_ANSWER:
    '使用智意达 进行国家政策法规解读，利用AI技术为企业提供实时、准确的政策解读，确保企业合规经营。',
  STARTER_FAQ_3_ANSWER:
    '使用智意达的人工智能在线客服，利用先进的NLP技术实现与用户的自然对话，为用户提供即时、准确的客户服务；',
  STARTER_FAQ_4_ANSWER:
    '使用智意达企业经营数据分析，通过深度学习算法深入分析企业运营数据，洞察业务趋势，为决策制定提供优化建议；',
  
  // ... (其他FAQ条目)

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    '智意达 由龚老师领衔开发与训练，感谢每一位贡献者</a>',
  // ... (团队成员项)

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于智意达的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，海南',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'admin#begs.cn',
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  // ... (合作伙伴项)
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],
  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',
  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://doc.hotelcases.cn' },
        { TITLE: '帮助支持', URL: 'https://help.hotelcases.cn' },
        { TITLE: '合作申请', URL: 'https://co.hotelcases.cn' }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        { TITLE: '智能助理', URL: 'https://zsk.begs.cn/chat/share?shareId=vkxiuc2zhuoxedqecc6ovmwu' },
        { TITLE: '政策专家', URL: 'https://zsk.begs.cn/chat/share?shareId=ie34m7dyg5em9hktjcb04kqf' },
        { TITLE: '收益管理', URL: 'https://zsk.begs.cn/chat/share?shareId=augem081tlh7y82lcr8dxxuc' }
      ]
    },
    {
      TITLE: 'Notion写作',
      LINK_GROUP: [
        { TITLE: '客房服务', URL: '#' },
        { TITLE: '前厅服务', URL: '#' },
        { TITLE: '餐饮服务', URL: '#' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新动态',
  
  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',
  
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',
  
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',
  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIOTN:
    '访问智意达的操作文档，我们提供了详细的教程，帮助你即刻搭上 AI 快车！',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL: 'https://ai.hotelcases.cn/',
  STARTER_CTA_BUTTON_TEXT: '开始体验',
  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://zsk.begs.cn/chat/share?shareId=ie34m7dyg5em9hktjcb04kqf', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}

export default CONFIG;
