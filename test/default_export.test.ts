import { describe, it } from "mocha";
import rand_default from "../src/rand";
import { strict as assert } from "assert";

describe("default export", () => {
  it("rand is exported as default", () => {
    assert.equal(rand_default.char().length, 1);
  });
});
