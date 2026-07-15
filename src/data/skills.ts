import type { Locale } from "./i18n";
import manifest from "./skills-manifest.json";

export interface SkillSummary {
  id: string;
  stage: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const boyaVersion = manifest.version;
export const boyaSourceCommit = manifest.source_commit;

const stages = new Map(manifest.skills.map((skill) => [skill.id, skill.stage]));
const stageFor = (id: string) => {
  const stage = stages.get(id);
  if (stage === undefined) throw new Error(`Skill ${id} is missing from the BOYA manifest snapshot`);
  return stage;
};

export const skills: SkillSummary[] = [
  { id: "boya", stage: stageFor("boya"), title: { "zh-hant": "全程導航", "zh-hans": "全程导航" }, description: { "zh-hant": "唯一推薦入口；定位進度、執行下一棒，研究決策一律停下等你拍板。", "zh-hans": "唯一推荐入口；定位进度、执行下一步，研究决策一律停下等你决定。" } },
  { id: "research-record", stage: stageFor("research-record"), title: { "zh-hant": "研究專案檔案", "zh-hans": "研究项目档案" }, description: { "zh-hant": "明確啟用後保存材料指標、人工決策、未知項與 boya 檢查點。", "zh-hans": "明确启用后保存材料索引、人工决策、未知项与 boya 检查点。" } },
  { id: "research-question", stage: stageFor("research-question"), title: { "zh-hant": "研究問題", "zh-hans": "研究问题" }, description: { "zh-hant": "把模糊興趣磨成可研究、可回答的問題。", "zh-hans": "把模糊兴趣磨成可研究、可回答的问题。" } },
  { id: "literature-search", stage: stageFor("literature-search"), title: { "zh-hant": "找文獻", "zh-hans": "找文献" }, description: { "zh-hant": "建立可追溯的檢索策略與待核候選文獻清單。", "zh-hans": "建立可追溯的检索策略与待核候选文献清单。" } },
  { id: "reference-check", stage: stageFor("reference-check"), title: { "zh-hant": "書目查核", "zh-hans": "书目查核" }, description: { "zh-hant": "核對文獻是否存在及書目是否相符；查無不判虛構。", "zh-hans": "核对文献是否存在及书目信息是否相符；未找到不判虚构。" } },
  { id: "literature-analysis", stage: stageFor("literature-analysis"), title: { "zh-hant": "文獻分析", "zh-hans": "文献分析" }, description: { "zh-hant": "從閱讀卡、對話地圖與矩陣看見爭點和缺口。", "zh-hans": "从阅读卡、对话地图与矩阵看见争点和缺口。" } },
  { id: "theoretical-framework", stage: stageFor("theoretical-framework"), title: { "zh-hant": "理論框架", "zh-hans": "理论框架" }, description: { "zh-hant": "比較候選理論，說清楚概念與解釋機制。", "zh-hans": "比较候选理论，说清楚概念与解释机制。" } },
  { id: "research-design", stage: stageFor("research-design"), title: { "zh-hant": "研究設計", "zh-hans": "研究设计" }, description: { "zh-hant": "讓問題、材料、方法與推論邊界互相對齊。", "zh-hans": "让问题、材料、方法与推论边界互相对齐。" } },
  { id: "paper-outline", stage: stageFor("paper-outline"), title: { "zh-hant": "論文大綱", "zh-hans": "论文大纲" }, description: { "zh-hant": "把論證順序搭成可寫、可檢查的章節骨架。", "zh-hans": "把论证顺序搭成可写、可检查的章节骨架。" } },
  { id: "academic-revision", stage: stageFor("academic-revision"), title: { "zh-hant": "學術修訂", "zh-hans": "学术修订" }, description: { "zh-hant": "診斷套話、校準作者聲音，僅套用作者批准的修訂區塊。", "zh-hans": "诊断套话、校准作者声音，仅应用作者批准的修订区块。" } },
  { id: "manuscript-review", stage: stageFor("manuscript-review"), title: { "zh-hant": "全文自審", "zh-hans": "全文自审" }, description: { "zh-hant": "從主張、證據、結構和誠信做投稿前檢查。", "zh-hans": "从主张、证据、结构和诚信做投稿前检查。" } },
  { id: "claim-audit", stage: stageFor("claim-audit"), title: { "zh-hant": "主張來源查核", "zh-hans": "主张来源查核" }, description: { "zh-hant": "回到指定原文，核對數字、因果、比較與核心論據是否獲得支持。", "zh-hans": "回到指定原文，核对数字、因果、比较与核心论据是否获得支持。" } },
  { id: "citation-format", stage: stageFor("citation-format"), title: { "zh-hant": "引用格式", "zh-hans": "引用格式" }, description: { "zh-hant": "依指定規範整理文內引用與參考文獻。", "zh-hans": "按指定规范整理文内引用与参考文献。" } },
  { id: "bilingual-abstract", stage: stageFor("bilingual-abstract"), title: { "zh-hant": "雙語摘要", "zh-hans": "双语摘要" }, description: { "zh-hant": "在內容定稿後對齊中英文摘要與關鍵詞。", "zh-hans": "在内容定稿后对齐中英文摘要与关键词。" } },
  { id: "ai-use-disclosure", stage: stageFor("ai-use-disclosure"), title: { "zh-hant": "AI 使用揭露", "zh-hans": "AI 使用披露" }, description: { "zh-hant": "按真實使用情況寫出透明、不誇大的揭露。", "zh-hans": "按真实使用情况写出透明、不夸大的披露。" } },
  { id: "thesis-defense-prep", stage: stageFor("thesis-defense-prep"), title: { "zh-hant": "口試準備", "zh-hans": "答辯準備" }, description: { "zh-hant": "從論文倒推出簡報、口頭敘事與追問清單。", "zh-hans": "从论文倒推出简报、口头叙事与追问清单。" } },
  { id: "journal-fit", stage: stageFor("journal-fit"), title: { "zh-hant": "投稿對標", "zh-hans": "投稿對標" }, description: { "zh-hant": "拿真實作者須知與來源表核對投稿差距。", "zh-hans": "拿真实作者须知与来源表核对投稿差距。" } },
];
