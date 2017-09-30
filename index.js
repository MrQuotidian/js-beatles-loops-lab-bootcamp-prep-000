function theBeatlesPlay( musicians, instruments ) {
  var return_array = [];

  for( let x in musicians ) {
    let m = musicians[x]
    let i = instruments[x]
    return_array.push(`${m} plays ${i}`)
  }

  return return_array
}