// Deklarasi array produkToko
// Array produkToko berisi objek-objek yang memiliki key id, nama, harga, dan stok
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Deklarasi fungsi tampilkanProduk
// Fungsi ini akan menampilkan data produk pada tabel produk
function tampilkanProduk() {
    let tbody = document.getElementById("produkBody");
    tbody.innerHTML = "";
    let no = 1;

    produkToko.forEach(produk => {
        let row = `<tr>
            <td>${no}</td>
            <td>${produk.id}</td>
            <td>${produk.nama}</td>
            <td>Rp${produk.harga}</td>
            <td>${produk.stok}</td>
            <td><button onclick="hapusProduk(${produk.id})">Hapus</button></td>
        </tr>`;
        no++;
        tbody.innerHTML += row;
    });
}


// Deklarasi fungsi tambahProduk
// Fungsi ini akan menambahkan produk baru ke dalam array produkToko
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length ? produkToko[produkToko.length - 1].id + 1 : 1;
    produkToko.push({ id: idBaru, nama, harga, stok });
    tampilkanProduk();
}

// Deklarasi fungsi hapusProduk
// Fungsi ini akan menghapus produk dari array produkToko berdasarkan id
function hapusProduk(id) {
    produkToko = produkToko.filter(produk => produk.id !== id);
    tampilkanProduk();
}

window.onload = tampilkanProduk;
