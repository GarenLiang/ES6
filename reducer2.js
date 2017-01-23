var votes=[
  "angular",
  "react",
  "ember",
  "vanilla",
  "react"
];

var initialValue=[];
var reducer=function(tally,vote){
  if(!tally[vote]){
    tally[vote]=1;
  }else{
    tally[vote]=tally[vote]+1;
  }
  return tally;
};
var result=votes.reduce(reducer,initialValue);
console.log(result);

//[ angular: 1, react: 2, ember: 1, vanilla: 1 ]
