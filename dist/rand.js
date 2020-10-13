/*!
 * @license rand
 * (c) 2019 tom
 * License: MIT
*/
function range(n, s) {
    var r = [];
    var ls = s ? s : 0;
    for (var i = 0; i < n; i++) {
        r.push(i + ls);
    }
    return r;
}
var Rand = /** @class */ (function () {
    function Rand() {
    }
    Rand.char = function () {
        return String.fromCharCode(("a").charCodeAt(0) + Math.floor(Math.random() * 26));
    };
    Rand.str = function (length) {
        return range(length ? length : 5).map(Rand.char).join("");
    };
    Rand.id = function (prefix_str) {
        return [
            (prefix_str ? prefix_str : ""),
            Rand.str(),
            (new Date()).getTime().toString()
        ].join("");
    };
    return Rand;
}());
export default Rand;
