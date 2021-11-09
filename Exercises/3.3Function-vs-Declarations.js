const worldPop = 7900;
function percentOfWorld1(population) {
  return (population / worldPop) * 100;
}
let Pop1 = percentOfWorld1(329.5);
let Pop2 = percentOfWorld1(125.8);
let Pop3 = percentOfWorld1(67.22);
console.log(Pop1);
console.log(Pop2);
console.log(Pop3);
const percentOfWorld2 = function (population) {
  return (population / worldPop) * 100;
};
Pop1 = percentOfWorld2(329.5);
Pop2 = percentOfWorld2(125.8);
Pop3 = percentOfWorld2(67.22);
console.log(Pop1);
console.log(Pop2);
console.log(Pop3);
