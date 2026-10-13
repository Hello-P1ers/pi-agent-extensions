import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { test } from "node:test";

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

test("uses Pi-hosted TypeBox without bundling a runtime copy", () => {
  assert.equal(packageJson.peerDependencies.typebox, "*");
  assert.equal(packageJson.dependencies?.typebox, undefined);
  assert.equal(packageJson.devDependencies.typebox, "1.1.38");
});
