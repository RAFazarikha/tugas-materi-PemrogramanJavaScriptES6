let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length ? produkToko[produkToko.length - 1].id + 1 : 1;
    produkToko.push({ id: idBaru, nama, harga, stok });
    console.log(`Produk ${nama} berhasil ditambahkan.`);
}

function hapusProduk(id) {
    let index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        let produkDihapus = produkToko.splice(index, 1);
        console.log(`Produk ${produkDihapus[0].nama} berhasil dihapus.`);
    } else {
        console.log("Produk tidak ditemukan.");
    }
}

function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga}, Stok: ${produk.stok}`);
    });
}

function updateProduk(id, namaBaru, hargaBaru, stokBaru) {
    let produk = produkToko.find(produk => produk.id === id);
    if (produk) {
        produk.nama = namaBaru || produk.nama;
        produk.harga = hargaBaru || produk.harga;
        produk.stok = stokBaru || produk.stok;
        console.log(`Produk ID ${id} berhasil diperbarui.`);
    } else {
        console.log("Produk tidak ditemukan.");
    }
}

// Contoh Penggunaan
console.log("Sebelum Perubahan:");
tampilkanProduk();

tambahProduk("Headset", 500000, 8);
console.log("Setelah Menambah Produk:");
tampilkanProduk();

hapusProduk(2);
console.log("Setelah Menghapus Produk:");
tampilkanProduk();

updateProduk(3, "Mechanical Keyboard", 400000, 5);
console.log("Setelah Memperbarui Produk:");
tampilkanProduk();
