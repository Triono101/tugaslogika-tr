var teks = document.getElementById('teks');
var teks2 = document.getElementById('teks2');
var hasil = document.getElementById('hasil');
var n = 4;
var n2 = 8;
    
teks.innerHTML = "Tekan tombol dibawah ini untuk mengetahui" + " faktor dari (n) <br><br> n = " + n;
teks2.innerHTML = "n = " + n2;

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
console.log(Factorial2(n2));