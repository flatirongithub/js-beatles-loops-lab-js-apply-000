function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var m in musicians) {
    array.push(musicians[m] + ' plays ' + instruments[m]);
  }
  return array;
}

function johnLennonFacts (facts) {
  var fact, f;
  while (f in facts) {
    facts[f]+=(facts[f]+"!!!");
    f++;
  }
  return facts;
}

function iLoveTheBeatles (n) {
  var array = [];
  do {
    array.push( "I love the Beatles!");
    n++;
  } while (n<15);
  return array;
}