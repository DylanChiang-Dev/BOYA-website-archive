import type { Locale } from "./i18n";

export interface SkillSummary {
  id: string;
  stage: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const skills: SkillSummary[] = [
  { id: "boya", stage: 0, title: { "zh-hant": "全程導航", "zh-hans": "全程导航" }, description: { "zh-hant": "定位進度、接力下一步；所有研究決策都停下等你拍板。", "zh-hans": "定位进度、接力下一步；所有研究决策都停下等你拍板。" } },
  { id: "research-question", stage: 1, title: { "zh-hant": "研究問題", "zh-hans": "研究问题" }, description: { "zh-hant": "把模糊興趣磨成可研究、可回答的問題。", "zh-hans": "把模糊兴趣磨成可研究、可回答的问题。" } },
  { id: "literature-search", stage: 2, title: { "zh-hant": "找文獻", "zh-hans": "找文献" }, description: { "zh-hant": "建立可追溯的檢索策略與候選文獻清單。", "zh-hans": "建立可追溯的检索策略与候选文献清单。" } },
  { id: "reference-check", stage: 2, title: { "zh-hant": "查引用", "zh-hans": "查引用" }, description: { "zh-hant": "回到原始出處核對引用、頁碼與承重事實。", "zh-hans": "回到原始出处核对引用、页码与关键事实。" } },
  { id: "literature-analysis", stage: 3, title: { "zh-hant": "文獻分析", "zh-hans": "文献分析" }, description: { "zh-hant": "從閱讀卡、對話地圖與矩陣看見爭點和缺口。", "zh-hans": "从阅读卡、对话地图与矩阵看见争点和缺口。" } },
  { id: "theoretical-framework", stage: 4, title: { "zh-hant": "理論框架", "zh-hans": "理论框架" }, description: { "zh-hant": "比較候選理論，說清楚概念與解釋機制。", "zh-hans": "比较候选理论，说清楚概念与解释机制。" } },
  { id: "research-design", stage: 5, title: { "zh-hant": "研究設計", "zh-hans": "研究设计" }, description: { "zh-hant": "讓問題、材料、方法與推論邊界互相對齊。", "zh-hans": "让问题、材料、方法与推论边界互相对齐。" } },
  { id: "paper-outline", stage: 6, title: { "zh-hant": "論文大綱", "zh-hans": "论文大纲" }, description: { "zh-hant": "把論證順序搭成可寫、可檢查的章節骨架。", "zh-hans": "把论证顺序搭成可写、可检查的章节骨架。" } },
  { id: "citation-format", stage: 7, title: { "zh-hant": "引用格式", "zh-hans": "引用格式" }, description: { "zh-hant": "依指定規範整理文內引用與參考文獻。", "zh-hans": "按指定规范整理文内引用与参考文献。" } },
  { id: "academic-revision", stage: 7, title: { "zh-hant": "學術修訂", "zh-hans": "学术修订" }, description: { "zh-hant": "修掉空話、跳步與翻譯腔，保留作者自己的聲音。", "zh-hans": "修掉空话、跳步与翻译腔，保留作者自己的声音。" } },
  { id: "manuscript-review", stage: 8, title: { "zh-hant": "全文自審", "zh-hans": "全文自审" }, description: { "zh-hant": "從主張、證據、結構和誠信做投稿前檢查。", "zh-hans": "从主张、证据、结构和诚信做投稿前检查。" } },
  { id: "bilingual-abstract", stage: 8, title: { "zh-hant": "雙語摘要", "zh-hans": "双语摘要" }, description: { "zh-hant": "在內容定稿後對齊中英文摘要與關鍵詞。", "zh-hans": "在内容定稿后对齐中英文摘要与关键词。" } },
  { id: "ai-use-disclosure", stage: 8, title: { "zh-hant": "AI 使用揭露", "zh-hans": "AI 使用披露" }, description: { "zh-hant": "按真實使用情況寫出透明、不誇大的揭露。", "zh-hans": "按真实使用情况写出透明、不夸大的披露。" } },
  { id: "thesis-defense-prep", stage: 9, title: { "zh-hant": "口試準備", "zh-hans": "答辩准备" }, description: { "zh-hant": "從論文倒推出簡報、口頭敘事與追問清單。", "zh-hans": "从论文倒推出简报、口头叙事与追问清单。" } },
  { id: "journal-fit", stage: 9, title: { "zh-hant": "投稿對標", "zh-hans": "投稿对标" }, description: { "zh-hant": "拿真實作者須知與目標刊文章核對差距。", "zh-hans": "拿真实作者须知与目标刊文章核对差距。" } },
];
