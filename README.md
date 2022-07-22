# @tomsd/rand

functions returning random values

![npm](https://img.shields.io/npm/v/@tomsd/rand)
![NPM](https://img.shields.io/npm/l/@tomsd/rand)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/@tomsd/rand)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@tomsd/rand)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

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
