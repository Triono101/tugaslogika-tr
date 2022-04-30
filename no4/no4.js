//Pilihan Pertama NILAI SUDAH FIX

let a = 3, b = 7;
[a, b] = [b, a];

console.log(`Nilai variabel swap dari 3 dan 7 adalah ${a} dan ${b}`);
alert(`Nilai variabel swap dari 3 dan 7 adalah ${a} dan ${b}`);

//Pilihan Kedua TENTUKAN NILAI SENDIRI

let c = prompt('Masukkan nilai variabel c : ');
let d = prompt('Masukkan nilai variabel d : ');

let temp;
temp = c;
c = d;
d = temp;

console.log(`Nilai variabel swap c : ${c}`);
console.log(`Nilai variabel swap d : ${d}`);
alert(`Nilai variabel swap dari ${c} dan ${d} adalah ${d} dan ${c}`);