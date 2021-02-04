const heading = document.getElementById("heading")

fetch('quotes.txt')
  .then((response)=>response.text())
  .then((responseText)=>run(responseText.split("\n")));

function run(lines) {
  // Shuffle the array for random quotes
  shuffleArray(lines)
  
  function pickWord() {
    shuffleItemToEnd(lines)
    const quote = lines[0]
    const duration = calculateStringDuration(quote)
    
    heading.innerHTML = spanify(quote, duration)
    
    return quote
  }
  
  function wordify() {
    const word = pickWord()
    
    console.log("New word: '" + word + "'         Duration: " + calculateStringDuration(word) + "ms")
    
    setTimeout(function() { 
      wordify()
    }, calculateStringDuration(word) + 1500);
  }
  
  wordify()
}
