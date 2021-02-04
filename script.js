const background = document.getElementById("background")
const heading = document.getElementById("heading")
const colours = ["#c45d72", "#d33d24", "#a7a79f", "#f4e969", "#3c86ab"]

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
    
    shuffleArray(colours)
    background.style.backgroundColor = colours[0];
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
