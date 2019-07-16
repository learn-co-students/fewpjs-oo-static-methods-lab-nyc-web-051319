class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z '-]/g, '')
  }

  static titleize(string) {
    let nonCaps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let splitString = string.split(" ")
    let arrWords = [this.capitalize(splitString[0])]
    for(let i = 1; i < splitString.length; i++) {
      if (nonCaps.includes(splitString[i])) {
        arrWords.push(splitString[i])
      } else {
        arrWords.push(this.capitalize(splitString[i]))
      }
    }
    return arrWords.join(" ")
  }
}