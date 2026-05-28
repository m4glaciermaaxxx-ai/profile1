import { PersonalInfo, EducationItem, WorkExperienceItem, MediaExperience, SkillCategory, CertificateItem } from "./types";

export const personalInfoData: PersonalInfo = {
  name: "尹广源",
  avatar: "", // Styled beautifully via CSS/SVG
  age: 25,
  educationLevel: "四川大学 985 硕士在读",
  email: "869024442@qq.com",
  phone: "15329944718",
  title: "高级创意营销设计师 / 艺术史学者",
  subTitle: "拥有在4A广告公司，外企广告公司从事营销广告的工作经历，以及自媒体博主带来的网感与多维度产品视角",
};

export const educationData: EducationItem[] = [
  {
    period: "2026.09 - 2029 在读",
    school: "四川大学 (985 院校)",
    degree: "硕士研究生",
    major: "艺术学 · 艺术史与批评研究",
    courses: [
      "艺术理论",
      "艺术管理学",
      "艺术史研究方法论",
      "美学艺术",
      "中国哲学史",
      "世界艺术批评",
    ],
    tag: "学术视界 · 理论探索",
  },
  {
    period: "2018.09 - 2022.07",
    school: "四川美术学院",
    degree: "本科",
    major: "设计教育 · 空间设计",
    courses: [
      "设计方法论",
      "视觉整合设计",
      "展示空间艺术",
      "空间理论基础",
      "博物馆公共美育",
      "社区公共美育",
      "设计构造",
      "世界艺术史",
      "艺术概论",
    ],
    honors: [
      "在校内多次获得艺术晚会二三等奖",
      "辩论大赛中获得全校三等奖",
      "被评为“四川美术学院文艺活动先进个人”",
    ],
    tag: "视觉整合·展览管理",
  },
];

export const workExperienceData: WorkExperienceItem[] = [
  {
    id: "bamboo",
    period: "2023.08 - 2025.04",
    company: "Bamboo 广告有限公司 (外企)",
    position: "创意营销设计师",
    description: [
      "用户洞察分析：基于品牌与目标用户画像，制定跨媒介产品策略，覆盖电商、社媒、线下终端等渠道",
      "全流程项目管理：负责宝洁、伊利、安慕希等品牌的创意营销与包装设计，系统探索品牌视觉在不同媒介中的叙事逻辑，积累丰富的视觉传播实证素材实践成果",
      "质量管控与流程标准化建设：负责项目视觉质量管控与最终交付，建立项目标准化执行流程，管理多项目并行进度与质量"
    ],
    achievements: [
      "参与多个公司与企业的营销项目，合作品牌有宝洁、中国女篮、只此青绿、迪士尼、伊利、安慕希、优酸乳、金典、QQ星、臻浓等，涉及到完成落地的项目工作多达 50+，拥有大量落地项目经验",
      "主导《安慕希 x 巴黎奥运会》《伊利纯奶 x CNY 限定》等多个头部品牌标杆项目，多个项目成为品牌及公司年度传播案例",
      "建立的标准化流程将单项目平均交付周期缩短 20%，同时保障周内 5+ 项目并行时的输出质量稳定"
    ],
    tags: ["创意整合", "全域媒介", "大牌包装", "外企资历"],
  },
  {
    id: "dailyneaty",
    period: "2023.02 - 2023.08",
    company: "奕至家居公司 daily neaty 品牌部",
    position: "视觉设计师",
    description: [
      "产品视觉全案负责：独立完成大促全案视觉，从 0 到 1 搭建活动视觉流程与基本设计标准",
      "根据数据迭代产品视觉：通过点击率、转化率等指标复盘视觉效果，探索视觉设计与用户行为的深层关联",
      "跨部门协作与体系化建设：在视觉实践中关注用户体验与视觉传播规律，为后续学术研究积累实证经验"
    ],
    achievements: [
      "独立负责完成 618 电商大促的所有视觉需求，核心活动页面转化率较上一年提升 18%",
      "制定并完成了品牌活动的视觉标准和视觉排版，使团队整体设计效率提升 35%，重复工作量减少 60%",
      "提出的 3 项产品体验优化以及视觉引导建议全部被产品团队采纳并落地"
    ],
    tags: ["电商全案", "数据驱动", "体验优化", "流程规范"],
  },
  {
    id: "bluefocus",
    period: "2022.07 - 2023.02",
    company: "蓝色光标传播集团 (4A 广告集团)",
    position: "营销设计师",
    description: [
      "参与需求调研与策划：深度参与前期用户需求调研与创意策划，基于用户洞察提出可落地的视觉解决方案",
      "参与核心设计：在头部品牌的整合营销项目中，负责核心视觉设计，包括线上数字媒体与线下体验活动",
      "积累传播学研究视野：在整合营销实践中深度理解并实践品牌传播的各种互动关系与传播机制"
    ],
    achievements: [
      "深度参与雀巢脆脆鲨、雀巢咖啡、呈真雪糍、只此青绿、伊利世界杯等营销创意的落地项目，多个项目成为品牌及公司年度传播案例"
    ],
    tags: ["4A广告", "用户洞察", "整合营销", "大厂洗礼"],
  },
  {
    id: "jichuan",
    period: "2020.06 - 2022.06",
    company: "橘川摄影工作室",
    position: "创始人 & 工作室负责人",
    description: [
      "从 0 到 1 建立个人品牌营销：以创始人身份搭建完整的摄影产品服务体系与整体品牌运营流程",
      "用户调研与市场营销：通过市场反馈及客户偏好持续优化视觉表达，大幅度提升产品竞争力和社群传播效果"
    ],
    achievements: [
      "在四川美术学院微企园创业园区，经学校评定，申请并得到创业基金及场地支持",
      "将工作室的平均每单营业额从 18 年的 3 位数成功提升至 22 年的 4 位数",
      "建立的标准化服务流程使客户满意度达 95% 以上，老客户转介绍与熟人推荐率达 40%"
    ],
    tags: ["自主创业", "品牌资产", "运营逻辑", "客户维护"],
  },
];

export const mediaExperienceData: MediaExperience = {
  platform: "抖音自媒体",
  channelName: "橘川川 mbti",
  role: "账号所有者及运营负责人",
  description: [
    "独立完成选题策划与内容输出：在垂类赛道中锁定 MBTI 性格特征探索，搭建高共鸣的内容框架并高频输出优质作品",
    "根据数据进行复盘迭代：通过播放量、完播率、涨粉率等核心后台指标，科学迭代内容方向、节奏与视觉艺术风格"
  ],
  achievements: [
    "从零开始独立启动运营，在不投入推流资金的情况下累计积累垂直粉丝 25,000+，打造了多个垂类爆款爆笑视频，单条视频最高阅读量达 250w 播放",
    "深刻掌握年轻一代用户洞察与流量增长运营逻辑，形成可复用的垂类内容运营方法论，完美适配互联网产品的用户运营 and 内容思维"
  ],
  stats: [
    { label: "账号粉丝", value: "25,000+", subtext: "精准MBTI兴趣垂类群体" },
    { label: "最高播放", value: "2.5M+", subtext: "单条视频最高播放量250万+" },
    { label: "铁粉群人数", value: "1.5k+", subtext: "自媒体核心社群体量" },
  ],
};

export const categoriesData: SkillCategory[] = [
  {
    category: "AI 工具与新科技",
    skills: [
      { name: "Gemini", level: 5 },
      { name: "ChatGPT", level: 5 },
      { name: "DeepSeek", level: 5 },
      { name: "Midjourney", level: 5 },
    ],
  },
  {
    category: "视觉与设计软件",
    skills: [
      { name: "Photoshop (PS)", level: 5 },
      { name: "Illustrator (AI)", level: 5 },
      { name: "Sketch", level: 4 },
      { name: "Figma (UI/UX)", level: 4 },
    ],
  },
  {
    category: "视频剪辑空间建模",
    skills: [
      { name: "After Effects (AE)", level: 4 },
      { name: "Premiere (PR)", level: 4 },
      { name: "Cinema 4D (C4D)", level: 3 },
      { name: "AutoCAD", level: 3 },
    ],
  },
  {
    category: "产品原型数据分析",
    skills: [
      { name: "原型设计(墨刀/Figma)", level: 4 },
      { name: "SQL (数据分析)", level: 4 },
      { name: "Xmind(思维导图/项目拆解)", level: 5 },
      { name: "Office 办公套件", level: 5 },
    ],
  },
];

export const certificatesData: CertificateItem[] = [
  { name: "国家高中美术教师资格证", authority: "中华人民共和国教育部" },
  { name: "大学英语 CET-4 证书", authority: "教育部考试中心" },
  { name: "普通话水平测试二级乙等", authority: "国家语言文字工作委员会" },
  { name: "国家机动车驾驶证 C1", authority: "公安部交通管理局" },
];

export const selfEvaluations: { title: string; content: string; key: string }[] = [
  {
    key: "01",
    title: "硕士名校学历 & 用户思维深度",
    content: "就读于 985 院校四川大学，学术功底扎实，学习习惯与信息整合能力极佳。擅长从用户体验、用户深层消费心理及用户思维体系，来洞察产品背后蕴含的逻辑和高效率的商业运营方向。",
  },
  {
    key: "02",
    title: "广告大厂与知名外企的创意验证",
    content: "拥有 4A 广告巨头 (蓝色光标) 与跨国外企的实战设计师工作背景。高度具备独立应对并突破复杂障碍的素质，掌握跨越不同媒介维度的多视角表现力，跨部门沟通、提案和协作经验极为丰富。",
  },
  {
    key: "03",
    title: "强抗压、自主学习与双驱经验",
    content: "既能在长线深度研究项目中稳扎稳打产出深刻成果，又习惯在短期、高强度、多线程并行项目的环境下进行高压力运作。保持对前沿科技 (AI大模型 / 流量逻辑 / 交互工具) 的极强敏锐度度与极高自主学习效率。",
  },
];
