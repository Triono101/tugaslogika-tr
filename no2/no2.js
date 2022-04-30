// const string = "abcde";
// const tugas2 = string
//     .split('')
//     .reverse()
//     .join('');

// console.log(tugas2);

function tugas2(str) {
    let newString = '';
    for (let i = str.length-1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
  
console.log(tugas2("abcde"));