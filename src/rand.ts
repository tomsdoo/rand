/*!
 * @license rand
 * (c) 2019 tom
 * License: MIT
*/
function range(n : number,s ?: number) : number[] {
  let r : number[] = [];
  let ls = s ? s : 0;
  for(let i = 0; i < n; i++){
    r.push(i +ls);
  }
  return r;
}
// function randc(){return String.fromCharCode(("a").charCodeAt(0)+Math.floor(Math.random()*26));}
// function rands(l){return range(l ? l : 5).map(randc).join("");}
// function randid(s){return [(s ? s : ""), rands(), (new Date()).getTime()].join("");}

export default class Rand {
  constructor(){
  }
  public static char(){
    return String.fromCharCode(("a").charCodeAt(0) + Math.floor(Math.random() * 26));
  }
  public static str(length ?: number){
    return range(length ? length : 5).map(Rand.char).join("");
  }
  public static id(prefix_str ?: string){
    return [
      (prefix_str ? prefix_str : ""),
      Rand.str(),
      (new Date()).getTime().toString()
    ].join("");
  }
}

// export default {char:randc, str:rands, id:randid};