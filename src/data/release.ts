const siteUrl = import.meta.env.PUBLIC_SITE_URL || "https://boya-website.pages.dev";
const downloadBaseUrl = (import.meta.env.PUBLIC_DOWNLOAD_BASE_URL || "").replace(/\/$/, "");
const fileName = "BOYA-Desktop_0.1.0_aarch64.dmg";
const sha256 = import.meta.env.PUBLIC_DOWNLOAD_SHA256 || "27aaa06166c92b5ccf2834217384e255cd769849010f27006864df0b0687b8a8";
const size = Number(import.meta.env.PUBLIC_DOWNLOAD_SIZE || 72977463);

export const macArtifact = {
  os: "macos",
  arch: "aarch64",
  fileName,
  size,
  sha256,
} as const;

export const releaseManifest = {
  version: "0.1.0",
  channel: "preview",
  publishedAt: "2026-07-14T00:00:00+08:00",
  releasePageUrl: `${siteUrl}/zh-hant/desktop/#download`,
  minimumSystemVersion: "macOS 13.0",
  assets: downloadBaseUrl && sha256 && size > 0
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
