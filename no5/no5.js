function ubahAngka () {
    let numberInput = document.querySelector('#numberInput').value ;
    let hasil = document.querySelector('#hasil');

    let inputAngka = ['','satu ','dua ','tiga ','empat ', 'lima ','enam ','tujuh ','delapan ',
                    'sembilan ','sepuluh ', 'sebelas ','dua belas ','tiga belas ','empat belas ',
                    'lima belas ','enam belas ','tujuh belas ','delapan belas ','sembilan belas '];
    let puluhan = ['', '', 'dua puluh','tiga puluh','empat puluh','lima puluh', 'enam puluh',
                    'tujuh puluh','delapan puluh','sembilan puluh'];

    if(numberInput.toString().length > 7)
    return hasil.innerHTML = 'overlimit' ;
    console.log(numberInput);

    let num = ('0000000'+ numberInput)
        .slice(-7)
        .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(num);
    if(!num) return;
    
    let outputHasil = num[1] != 0 ? (inputAngka[Number(num[1])] ||
        `${puluhan[num[1][0]]} ${inputAngka[num[1][1]]}` ) +' juta ' : ''; 
  
    outputHasil +=num[2] != 0 ? (inputAngka[Number(num[2])] ||
        `${puluhan[num[2][0]]} ${inputAngka[num[2][1]]}` ) +'ratus ' : ''; 
    outputHasil +=num[3] != 0 ? (inputAngka[Number(num[3])] ||
        `${puluhan[num[3][0]]} ${inputAngka[num[3][1]]}`) +' ribu ' : ''; 
    outputHasil +=num[4] != 0 ? (inputAngka[Number(num[4])] ||
        `${puluhan[num[4][0]]} ${inputAngka[num[4][1]]}`) +'ratus ': ''; 
    outputHasil +=num[5] != 0 ? (inputAngka[Number(num[5])] ||
        `${puluhan[num[5][0]]} ${inputAngka[num[5][1]]} `) : ''; 

    hasil.innerHTML = outputHasil;
};