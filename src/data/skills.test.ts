import { describe, expect, it } from "vitest";
import manifest from "./skills-manifest.json";
import { boyaSourceCommit, boyaVersion, skills } from "./skills";

describe("skills catalogue", () => {
  it("matches the committed BOYA 2.1 manifest snapshot", () => {
    expect(boyaVersion).toBe("2.1.0");
    expect(boyaSourceCommit).toMatch(/^[0-9a-f]{40}$/);
    expect(skills).toHaveLength(17);
    expect(new Set(skills.map((skill) => skill.id)).size).toBe(17);
    expect(skills.map((skill) => skill.id)).toEqual(manifest.skills.map((skill) => skill.id));
    expect(skills.map((skill) => skill.stage)).toEqual(manifest.skills.map((skill) => skill.stage));
    expect(skills[0]?.id).toBe("boya");
    expect(skills.some((skill) => skill.id === "claim-audit")).toBe(true);
    expect(skills.some((skill) => skill.id === "research-record")).toBe(true);
  });
});
