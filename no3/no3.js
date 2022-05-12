var n = "9.86-A5.321"
var d = n.replace(/\D/g,"").split("").reverse();

let string = "";

function valueOutput(data, n, str) {
    return data+Array(n-String(data).length+1).join(str||'0');
}
for(let i=d.length-1; i>=0; i--) {
  string += parseInt(valueOutput(d[i] , i+1))+ "\n";
}

console.log(string);