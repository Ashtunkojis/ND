function alphabetPosition(text) {
    let result = [];
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
      "w", "x", "y", "z"]
    text = text.replace(/\W*\d+/g, '').toLowerCase().split('');
    for (let i = 0; i < text.length; i++) {
        let j = alphabet.indexOf(text[i]) + 1;
        if (j) result.push(j);
      }
    return result.join(' ');
  }
  console.log (alphabetPosition("The sunset sets at twelve o' clock."));
  console.log (alphabetPosition("The narwhal bacons at midnight."));