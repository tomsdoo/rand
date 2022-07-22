# @tomsd/rand

functions returning random values

## Installation
``` sh
npm install @tomsd/rand
```

# Usage

``` typescript
import { Rand } from "@tomsd/rand";
```

``` js

console.log(Rand.char()); // one character that is in a to z

console.log(Rand.str()); // 5 character string

const length_wanted = 8;
console.log(rand.str(length_wanted).length); // 8

console.log(rand.id()); // random string

const prefix_str = "abc";
console.log(rand.id(prefix_str)); // prefixed

```
