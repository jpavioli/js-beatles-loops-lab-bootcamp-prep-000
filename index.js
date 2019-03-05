// Beatles Loops returns an array of strings containing what instruments each musician plays

function theBeatlesPlay(musicians, instruments){
  var BeatlesPlay = []
  for(var i=0;i<(musicians.length);i++){
    BeatlesPlay.push(musicians[i]+" plays "+instruments[i]);
  }
  return BeatlesPlay
}