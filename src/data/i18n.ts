export const locales = ["zh-hant", "zh-hans"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  "zh-hant": "繁體中文",
  "zh-hans": "简体中文",
};

export const messages = {
  "zh-hant": {
    nav: { home: "首頁", skills: "Skills", desktop: "Desktop", docs: "使用指南", community: "作者答疑群" },
    action: { download: "免費下載 Preview", skills: "查看免費 Skills", github: "前往 GitHub", contact: "加入作者答疑群", close: "關閉" },
    common: {
      brand: "BOYA 博雅",
      tagline: "給人文社科研究者的 AI 研究工作台",
      principle: "AI 做苦工，你做判斷。",
      preview: "macOS Preview",
      free: "免費",
      source: "唯一真實來源",
      learnMore: "了解更多",
    },
    footer: { note: "研究工作流保持開源；付費的是直接支援與持續服務。", privacy: "隱私政策", terms: "服務條款" },
  },
  "zh-hans": {
    nav: { home: "首页", skills: "Skills", desktop: "Desktop", docs: "使用指南", community: "作者答疑群" },
    action: { download: "免费下载 Preview", skills: "查看免费 Skills", github: "前往 GitHub", contact: "加入作者答疑群", close: "关闭" },
    common: {
      brand: "BOYA 博雅",
      tagline: "给人文社科研究者的 AI 研究工作台",
      principle: "AI 做苦工，你做判断。",
      preview: "macOS Preview",
      free: "免费",
      source: "唯一真实来源",
      learnMore: "了解更多",
    },
    footer: { note: "研究工作流保持开源；付费的是直接支持与持续服务。", privacy: "隐私政策", terms: "服务条款" },
  },
} as const;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "zh-hant" ? "zh-hans" : "zh-hant";
}

export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return `/${locale}/${clean ? `${clean}/` : ""}`;
}

export function staticLocalePaths() {
  return locales.map((locale) => ({ params: { locale }, props: { locale } }));
}
