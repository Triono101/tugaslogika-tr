// var data = "9.86-A5.321"
// var option = data.replace(/\D/g,"").split("").reverse();

// let string = "";

// function valueOutput(n, data, str) {
//     return n + Array(data-String(data).length + 1).join(str||'0');
// }
// for(let i = option.length-1; i >= 0; i--) {
//   string += parseInt(valueOutput(option[i] , i+1))+ "\n";
// }
// console.log(string);

var data = "9.86-A5.321"
var option = data.replace(/\D/g,"");
console.log(option);

var valueOutput = option.split("");
const number = valueOutput.length;
for(let i=0; i<number; i++) {
  console.log(valueOutput[i].padEnd(number-i,'0'));
};