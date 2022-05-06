var teks = document.getElementById('teks');
var teks2 = document.getElementById('teks2');
var teks3 = document.getElementById('teks3');
var hasil = document.getElementById('hasil');
var n = 4;
var n2 = 8;
var n3 = 12;
    
teks.innerHTML = "Tekan tombol dibawah ini untuk mengetahui" + " faktor dari (n) <br><br> n = " + n;
teks2.innerHTML = "n = " + n2;
teks3.innerHTML = "n = " + n3;

//Faktorial Pertama
function Factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * Factorial( n - 1 );
    }
}
function tombol() {
    hasil.innerHTML = Factorial(n);
}
console.log(Factorial(n));

// Faktorial Kedua
function Factorial2(n2) {
    if (n2 === 0) {
        return 1;
    }
    else {
        return n2 * Factorial2( n2 - 1 );
    }
}
function tombol2() {
    hasil.innerHTML = Factorial2(n2);
}
console.log(Factorial(n2));

// Faktorial Ketiga
function Factorial3(n3) {
    if (n3 === 0) {
        return 1;
    }
    else {
        return n3 * Factorial3( n3 - 1 );
    }
}
function tombol3() {
    hasil.innerHTML = Factorial3(n3);
}
console.log(Factorial(n3));