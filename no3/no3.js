function printDigitValue(value) {
    var array = value.split('');
    for(var i = 0; i<array.length; i++) {
     if(!isNaN(array[i])) {
       console.log(array[i]);
     } 
    }
  }
  
printDigitValue("9.86-A5.321");