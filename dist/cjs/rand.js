"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * @license rand
 * (c) 2019 tom
 * License: MIT
*/
function range(n, s) {
    let r = [];
    let ls = s ? s : 0;
    for (let i = 0; i < n; i++) {
        r.push(i + ls);
    }
    return r;
}
class Rand {
    constructor() {
    }
    static char() {
        return String.fromCharCode(("a").charCodeAt(0) + Math.floor(Math.random() * 26));
    }
    static str(length) {
        return range(length ? length : 5).map(Rand.char).join("");
    }
    static id(prefix_str) {
        return [
            (prefix_str ? prefix_str : ""),
            Rand.str(),
            (new Date()).getTime().toString()
        ].join("");
    }
}
exports.default = Rand;
