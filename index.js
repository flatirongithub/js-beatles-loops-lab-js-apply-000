function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var m in musicians) {
    array.push(musicians[m] + ' plays ' + instruments[m]);
  }
  return array;
}

function johnLennonFacts (facts) {
  var fact;
  while (var f in facts) {
    fact.push(facts[f]+"!!!");
  }
  return fact;
}

function iLoveTheBeatles (n) {
  var array = [];
  do {
    array.push( "I love the Beatles!");
    n++;
  } while (n<15);
  return array;
}