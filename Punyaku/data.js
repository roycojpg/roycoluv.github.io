const namaSaya = "richo ferdinand"; // data konstan dapat menggunakan const & let
let usia = 100; // penulisan variabel jika ada dua kata maka kata kedua huruf yang didepan harus kapital 
const biodata = document.getElementById('biodata');
console.log('nama saya adalah ', namaSaya , 'usia saya adalah', usia , 'tahun'); // bisa juga seperti ini

function generateBiodata() {
    let generasi;
    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    } 
    else if (usia > 18 && usia < 30 ) {
        generasi = "generasi dewasa";
    }
    else if (usia >= 30) {
        generasi = "generasi tuwir";
    }
    else if (usia > 2 && usia < 10) {
        generasi = "generasi adik adik";
    }
    else {
        generasi = "generasi bayi";
    }
    return biodata.innerHTML = generasi;
}

console.log(namaSaya);
console.log(usia);

generateBiodata();