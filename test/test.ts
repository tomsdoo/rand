import { describe, it } from "mocha";
import { Rand } from "../src/rand";
import rand_default from "../src/rand";
import { strict as assert } from "assert";

const loweralphabets = "abcdefghijklmnopqrstuvwxyz";

describe("Rand.char()", () => {
  it("char() returns 1 length string", () => {
    assert.equal(Rand.char().length, 1);
  });

  it("char() returns a character", () => {
    assert(loweralphabets.indexOf(Rand.char()) >= 0);
  });
});

describe("Rand.str()", () => {
  it("str() returns 5 length string as default", () => {
    assert.equal(Rand.str().length, 5);
  });

  it("str() returns some characters", () => {
    assert(
      Rand.str()
        .split("")
        .every(function (c) {
          return loweralphabets.indexOf(c) >= 0;
        })
    );
  });

  it("str() returns string that has the length as parameter number", () => {
    const mylength = 10;
    assert.equal(Rand.str(mylength).length, mylength);
  });
});

describe("Rand.id()", () => {
  it("id() returns not same as before", () => {
    const ids = [0, 1].map(function () {
      return Rand.id();
    });
    assert(ids[0] !== ids[1]);
  });

  it("id() returns string that starts with the paramete", () => {
    const mystartstr = "teststart";
    assert.equal(Rand.id(mystartstr).slice(0, mystartstr.length), mystartstr);
  });
});

describe("default export", () => {
  it("rand is also exported as default", () => {
    assert.equal(rand_default.char().length, 1);
  });
});
