# @tomsd/rand

## Installation
``` sh
npm install @tomsd/rand
```

# Usage

``` js
const rand = require("@tomsd/rand").default;
```

``` js
// with bundler...
import rand from "@tomsd/rand";
```

``` js

console.log(rand.char());
console.log(rand.str());
const length_wanted = 8;
console.log(rand.str(length_wanted));
console.log(rand.id());
const prefix_str = "abc";
console.log(rand.id(prefix_str));

```
