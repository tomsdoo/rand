/*!
 * @license rand
 * (c) 2019 tom
 * License: MIT
 */
function range(n: number, s?: number): number[] {
  const r: number[] = [];
  const ls = s ?? 0;
  for (let i = 0; i < n; i++) {
    r.push(i + ls);
  }
  return r;
}

// eslint-disable-next-line
export class Rand {
  public static char(): string {
    return String.fromCharCode(
      "a".charCodeAt(0) + Math.floor(Math.random() * 26)
    );
  }

  public static str(length?: number): string {
    return range(length ?? 5)
      .map(Rand.char)
      .join("");
  }

  public static id(prefixStr?: string): string {
    return [prefixStr ?? "", Rand.str(), new Date().getTime().toString()].join(
      ""
    );
  }
}

export default Rand;
