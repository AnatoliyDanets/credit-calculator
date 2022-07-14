export function CorrectString(value) {
    const arrStr = value
      .split("")
      .map((el, i, a) => {
        if (a.length > 14) {
          return [a.slice(0, 14), "..."];
        }
        return a;
      })[0]
      .flat(Infinity)
      .join("");
  
    return arrStr;
  }