import { describe, expect, it } from "vitest";
import { localePath, locales, messages } from "./i18n";

describe("locales", () => {
  it("ships the two launch locales", () => {
    expect(locales).toEqual(["zh-hant", "zh-hans"]);
  });

  it("keeps top-level message groups aligned", () => {
    expect(Object.keys(messages["zh-hant"])).toEqual(Object.keys(messages["zh-hans"]));
    expect(Object.keys(messages["zh-hant"].nav)).toEqual(Object.keys(messages["zh-hans"].nav));
    expect(Object.keys(messages["zh-hant"].action)).toEqual(Object.keys(messages["zh-hans"].action));
  });

  it("builds trailing-slash locale paths", () => {
    expect(localePath("zh-hant", "desktop")).toBe("/zh-hant/desktop/");
    expect(localePath("zh-hans")).toBe("/zh-hans/");
  });
});
