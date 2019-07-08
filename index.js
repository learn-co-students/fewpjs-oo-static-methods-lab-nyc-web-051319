class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string) {
    const words = string.split(" ")
    const excludedWords = ["the", "a", "an", "but","of","and","for","at","by", "from"]
    return words.map(word => {
      if(!excludedWords.includes(word) || word === words[0]){
        return Formatter.capitalize(word)}
      else {
        return word
      }
    }).join(" ")
  }
}
