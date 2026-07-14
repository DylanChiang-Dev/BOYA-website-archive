import { describe, expect, it } from "vitest";
import { skills } from "./skills";

describe("skills catalogue", () => {
  it("lists exactly the 15 canonical BOYA skills", () => {
    expect(skills).toHaveLength(15);
    expect(new Set(skills.map((skill) => skill.id)).size).toBe(15);
    expect(skills[0]?.id).toBe("boya");
  });
});
