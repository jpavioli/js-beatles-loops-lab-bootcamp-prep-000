// Beatles Loops returns an array of strings containing what instruments each musician plays

function theBeatlesPlay(musicians, instruments){
  var BeatlesPlay = []
  for(var i=0;i<(musicians.length);i++){
    BeatlesPlay.push(musicians[i]+" plays "+instruments[i]);
  }
  return BeatlesPlay
}

//Beatles Loops johnLennonFacts returns an array of strings with exclamation points
function johnLennonFacts(facts){
  var newFacts = []
  var i=0
  while(i<(facts.length)){
    newFacts.push(facts[i]+"!!!")
    i++
  }
  return newFacts
}

//