const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function theBeatlesPlay( musicians, instruments ) {
  var return_array = [];

  for( let x in musicians ) {
    let m = musicians[x]
    let i = instruments[x]
    return_array.push(`${m} plays ${i}`)
  }

  return return_array
}

function johnLennonFacts( arr ) {
  let i = 0
  while( i < arr.length ) {
    arr[i] = arr[i] + "!!!"
  }
  return arr
}