const siteUrl = import.meta.env.PUBLIC_SITE_URL || "https://boya-website.pages.dev";
const downloadVersion = import.meta.env.PUBLIC_DOWNLOAD_VERSION || "";
const downloadBaseUrl = (import.meta.env.PUBLIC_DOWNLOAD_BASE_URL || "").replace(/\/$/, "");
const fileName = "BOYA-Desktop_0.2.0_aarch64.dmg";
const sha256 = import.meta.env.PUBLIC_DOWNLOAD_SHA256 || "";
const size = Number(import.meta.env.PUBLIC_DOWNLOAD_SIZE || 0);

export const macArtifact = {
  os: "macos",
  arch: "aarch64",
  fileName,
  size,
  sha256,
} as const;

export const releaseManifest = {
  version: "0.2.0",
  channel: "preview",
  publishedAt: null,
  releasePageUrl: `${siteUrl}/zh-hant/desktop/#download`,
  minimumSystemVersion: "macOS 13.0",
  assets: downloadVersion === "0.2.0" && downloadBaseUrl && sha256 && size > 0
    ? [{
        ...macArtifact,
        url: `${downloadBaseUrl}/${fileName}`,
      }]
    : [],
} as const;

export const macAsset = releaseManifest.assets[0];

export function formatBytes(bytes: number, locale: LocaleTag = "zh-TW"): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "--";
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(bytes / 1024 / 1024) + " MB";
}

type LocaleTag = "zh-TW" | "zh-CN";
