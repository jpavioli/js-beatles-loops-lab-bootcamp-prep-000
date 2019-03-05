// Beatles Loops returns an array of strings containing what instruments each musician plays
function theBeatlesPlay(musicians, instruments){
  for(var i=1,i<(musicians.length+1),i++){
    return musicians.[i]+" plays "+instruments.[i];
  }
}