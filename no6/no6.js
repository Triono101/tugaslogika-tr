var angka = [105, 3, 45, 1, 5, 20, 10, 75, 50, 100];
angka.sort(function(a, b) {
    return a - b;
});

document.write(`Hasil sortir dari [105, 3, 45, 1, 5, 20, 10, 75, 50, 100] adalah : ` + angka);
console.log(angka);