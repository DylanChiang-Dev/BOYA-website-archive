import { describe, expect, it } from "vitest";
import { formatBytes, releaseManifest } from "./release";

describe("release manifest", () => {
  it("exposes the stable public contract", () => {
    expect(releaseManifest.version).toBe("0.1.0");
    expect(releaseManifest.channel).toBe("preview");
    expect(releaseManifest.releasePageUrl).toContain("/zh-hant/desktop/#download");
    expect(Array.isArray(releaseManifest.assets)).toBe(true);
  });

  it("formats configured asset sizes", () => {
    expect(formatBytes(1048576)).toBe("1 MB");
    expect(formatBytes(0)).toBe("--");
  });
});
