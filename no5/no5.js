function ubahAngka () {
    let inputAngka = document.querySelector('#inputAngka').value ;
    let hasil = document.querySelector('#hasil');

    let hitungan1 = ['','satu ','dua ','tiga ','empat ', 'lima ','enam ','tujuh ','delapan ',
                        'sembilan ','sepuluh ', 'sebelas ','dua belas ','tiga belas ','empat belas ',
                        'lima belas ','enam belas ','tujuh belas ','delapan belas ','sembilan belas '];
                        
    let hitungan2 = ['', '', 'dua puluh','tiga puluh','empat puluh','lima puluh', 'enam puluh',
                        'tujuh puluh','delapan puluh','sembilan puluh'];

    if(inputAngka.toString().length > 2)
    return hasil.innerHTML = 'Masukkan bilangan 1-100' ;
    console.log(inputAngka);

    let num = ('000'+ inputAngka)
        .slice(-3)
        .match(/^(\d{1})(\d{2})$/);
    console.log(num);
    if(!num) return;
    
    let outputHasil = num[1] != 0 ? (hitungan1[Number(num[1])] || `${hitungan2[num[1][0]]} ${hitungan1[num[1][1]]}` ) : ''; 
        outputHasil +=num[2] != 0 ? (hitungan1[Number(num[2])] || `${hitungan2[num[2][0]]} ${hitungan1[num[2][1]]} `) : '';

    hasil.innerHTML = outputHasil;
};