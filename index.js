class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^0-9a-zA-Z '-]/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let splitString = string.split(" ")
    let stringMap = splitString.map(function(word) {
      if (exceptions.includes(word) && word !== splitString[0]) {
        return word
      }
      else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    })
    return stringMap.join(" ")
  }
}

