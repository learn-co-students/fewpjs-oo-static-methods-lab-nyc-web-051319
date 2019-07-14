class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let words = string.split(" ")
    let lowerCaseWords = ['a', 'an', 'but', 'of', 'the', 'and', 'for', 'at', 'by', 'from']
    let newWords = []
      for(let i=0; i < words.length; i++) {
        if( i === 0) {
          newWords.push(this.capitalize(words[i]))
        } 
        else {
          if (lowerCaseWords.includes(words[i])) {
            newWords.push(words[i])
          }
          else {
            newWords.push(this.capitalize(words[i]))
          }
        }
      }
    let newSentence = newWords.join(" ")
    return newSentence 
  }

}



