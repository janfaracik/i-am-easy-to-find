function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleItemToEnd(array) {
  array.push(array.shift())
}

function generateSpan(duration) {
  const offset = Math.floor(Math.random() * (duration / 5))
  return `<span style="animation: appear-disappear ${duration - offset * 2}ms none; animation-delay: ${offset}ms; animation-fill-mode: both;">`
}

function spanify(text, duration) {
  const chars = text.split('')
  let offset = 0
  
  for (var i = 0; i < text.length; i++) {
    let span = generateSpan(duration)
    chars.splice(i + offset, 0, span)
    offset ++
  }
  
  let charLength = chars.length
  offset = 2
  
  for (var i = 0; i < text.length; i++) {
    chars.splice(i + offset, 0, "</span>")
    offset += 2
  }
  
  return chars.join("")
}

function calculateStringDuration(text) {
  return text.length * 500
}