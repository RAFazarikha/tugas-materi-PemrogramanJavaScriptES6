// **Data Produk** 
let produkList = [ 
    { id: 1, nama: "Laptop", harga: 12000000 }, 
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Smartwatch", harga: 2000000 },
    { id: 5, nama: "Headphone", harga: 1500000 }
]; 

// Event Handler Object
const eventHandler = { 
    tambahProduk: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapusProduk: (...id) => hapusProduk(...id),
    tampilkanProduk: () => tampilkanProduk()
};

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) { 
    produkList = [...produkList, { id, nama, harga }];
    console.log(`Produk ${nama} telah ditambahkan.`);
} 

// Menghapus Produk dengan Rest Parameter
function hapusProduk(...idList) { 
    produkList = produkList.filter(produk => !idList.includes(produk.id));
    console.log(`Produk dengan ID ${idList.join(", ")} telah dihapus.`);
} 

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() { 
    console.log("Daftar Produk:");

    for (const { id, nama, harga } of produkList) {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    }

    console.log("===================================");
} 

// Menjalankan fungsi untuk demonstrasi
console.log("Sebelum penambahan:");
tampilkanProduk();

tambahProduk(6, "Monitor", 3000000);
console.log("Setelah penambahan:");
tampilkanProduk();

hapusProduk(2, 4);
console.log("Setelah penghapusan:");
tampilkanProduk();
