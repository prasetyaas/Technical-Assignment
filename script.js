function soal1() {
    let input = prompt("Masukan Bilangan Bulat");
    function kotak(input) {
        let hasil = '';
        for (let i = 0; i < input; i++) {
            for (let j = 0; j < input; j++) {
                hasil += '* ';
            }
            hasil += '\n';
        }
        return hasil;
    }
    console.log('Bilangan Bulat : ', input);
    console.log(kotak(input));
}

function soal2() {
    alert('Saya kesulitan untuk nomor ini dan Belum sempat di kerjakan');
}

function soal3() {
    alert('Saya agak kesulitan untuk bagian ini, namun sedikit bekerja untuk bilangan kecil dan masih bug untuk bilangan besar')
    let a = parseInt(prompt("Masukan Bilangan A"));
    let b = parseInt(prompt("Masukan Bilangan B"));
    function kotak(a, b) {
        let hasil = '';
        let hasil1 = '';
        let hasil2 = '';
        let hasil3 = '';
        let hasilNew = '';
        let hasilNew1 = '';
        let hasilNew2 = '';
        let hasilNew3 = '';


        if (a > b) {
            for (let i = 0; i < a; i++) {
                if (i % 2 == 0) {
                    let totleng = hasil1.length;
                    if (totleng >= 3) {
                        hasilNew += 'a';
                    } else {
                        hasil1 += 'a';
                    }
                } else {
                    let totleng = hasil.length;
                    if (totleng >= 3) {
                        hasilNew1 += 'a';
                    } else {
                        hasil += 'a';
                    }
                }
            }
            for (let j = 0; j < b; j++) {
                if (j % 2 == 0) {
                    let totleng = hasil2.length;
                    if (totleng >= 3) {
                        hasilNew2 += 'b';
                    } else {
                        hasil2 += 'b';
                    }
                } else {
                    let totleng = hasil.length;
                    if (totleng >= 3) {
                        hasilNew3 += 'b';
                    } else {
                        hasil3 += 'b';                    
                    }
                }
            }
        } else if (b > a) {
            for (let i = 0; i < b; i++) {
                if (i % 2 == 0) {
                    let totleng = hasil1.length;
                    if (totleng >= 3) {
                        hasilNew += 'b';
                    } else {
                        hasil1 += 'b';
                    }
                } else {
                    let totleng = hasil.length;
                    if (totleng >= 3) {
                        hasilNew1 += 'b';
                    } else {
                        hasil += 'b';
                    }
                }
            }
            for (let j = 0; j < a; j++) {
                if (j % 2 == 0) {
                    let totleng = hasil2.length;
                    if (totleng >= 3) {
                        hasilNew2 += 'a';
                    } else {
                        hasil2 += 'a';
                    }
                } else {
                    let totleng = hasil.length;
                    if (totleng >= 3) {
                        hasilNew3 += 'a';
                    } else {
                        hasil3 += 'a';                    
                    }
                }
            }
        }
        let result = hasil.concat(hasil2, hasil1, hasil3, hasilNew,hasilNew1,hasilNew2,hasilNew3);
        return result;
    }
    console.log('Bilangan A : ', a);
    console.log('Bilangan B : ', b);
    console.log(kotak(a, b));
}