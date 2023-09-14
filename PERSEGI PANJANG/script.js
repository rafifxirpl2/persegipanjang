function hitungLuas() {
    const panjang = parseFloat(document.getElementById('panjang').value);
    const lebar = parseFloat(document.getElementById('lebar').value);

    if (!isNaN(panjang) && !isNaN(lebar)) {
        const luas = panjang * lebar;
        document.getElementById('hasilLuas').textContent = luas;
    } else {
        document.getElementById('hasilLuas').textContent = 'Masukkan panjang dan lebar yang valid.';
    }
}