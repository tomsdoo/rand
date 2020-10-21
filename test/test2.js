const rand = require("../dist/cjs/rand").default;
const assert = require("assert");

console.log("test for commonjs");
console.log(`const rand = requir("@tomsd/rand");`);

const loweralphabets = "abcdefghijklmnopqrstuvwxyz";

describe("rand.char()", function(){
  it("returns 1 length string", function(){
    assert.equal(rand.char().length, 1);
  });
  it("returns a character", function(){
    assert(loweralphabets.indexOf(rand.char()) >= 0);
  });
});

describe("rand.str()", function(){
  it("returns 5 length string as default", function(){
    assert.equal(rand.str().length,5);
  });
  it("returns some characters", function(){
    assert(rand.str().split("").every(function(c){
      return loweralphabets.indexOf(c) >= 0;
    }));
  });
  it("returns a string that has the length as parameter number", function(){
    const mylength = 10;
    assert.equal(rand.str(mylength).length, mylength);
  });
});

describe("rand.id()", function(){
  it("returns not same as before", function(){
    const ids = [0,1].map(function(){return rand.id();});
    assert(ids[0] !== ids[1]);
  });
  it("returns a string that starts with the parameter", function(){
    const prefix = "prefix";
    assert.equal(rand.id(prefix).slice(0, prefix.length), prefix);
  });
});
