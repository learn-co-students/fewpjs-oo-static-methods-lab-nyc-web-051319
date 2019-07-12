class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let adjectives = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(" ")
    let newStr = [];
    for (let i = 0; i < words.length; i++) {
      if (i == 0) {
        newStr.push(this.capitalize(words[i]))
      } else {
        if (adjectives.includes(words[i])) {
          newStr.push(words[i])
        } else {
          newStr.push(this.capitalize(words[i]))
        }
      }

    }
    return newStr.join(" ");
  }
}
