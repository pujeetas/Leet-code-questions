function backspace(s, t) {
  let resultS = [];
  let resultT = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      resultS.pop(resultS[resultS.length - 1]);
    } else {
      resultS.push(s[i]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      resultT.pop(resultT[resultT.length - 1]);
    } else {
      resultT.push(t[i]);
    }
  }

  return resultS.join("") === resultT.join("");
}

console.log(backspace("ab#c", "ad#c"));
