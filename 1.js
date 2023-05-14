function cos_2(x) {
  return Math.cos(x * x); }
mas = []
for (let i=0; i < 14; i++){
  mas.push(cos_2(Math.random()));
}
console.log(mas.sort().reverse())