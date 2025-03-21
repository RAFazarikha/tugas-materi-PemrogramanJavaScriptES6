class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }
}

class ManajemenTransportasi {
    constructor() {
        this.pelangganList = [];
    }

    tambahPelanggan(nama, nomorTelepon, kendaraanDisewa) {
        const pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraanDisewa);
        this.pelangganList.push(pelangganBaru);
        console.log(`Pelanggan ${nama} berhasil ditambahkan.`);
        console.log("==================================");
    }

    hapusPelanggan(nama) {
        const index = this.pelangganList.findIndex(p => p.nama === nama);
        if (index !== -1) {
            this.pelangganList.splice(index, 1);
            console.log(`Pelanggan ${nama} berhasil dihapus.`);
            console.log("==================================");
        } else {
            console.log("Pelanggan tidak ditemukan.");
            console.log("==================================");
        }
    }

    tampilkanPelanggan() {
        console.log("Daftar Pelanggan yang Menyewa Kendaraan:");
        this.pelangganList.forEach((p, index) => {
            console.log(`${index + 1}. Nama: ${p.nama}, No. Telepon: ${p.nomorTelepon}, Kendaraan: ${p.kendaraanDisewa}`);
        });
        console.log("==================================");
    }

    updatePelanggan(namaLama, namaBaru, nomorTeleponBaru, kendaraanBaru) {
        let pelanggan = this.pelangganList.find(p => p.nama === namaLama);
        if (pelanggan) {
            pelanggan.nama = namaBaru || pelanggan.nama;
            pelanggan.nomorTelepon = nomorTeleponBaru || pelanggan.nomorTelepon;
            pelanggan.kendaraanDisewa = kendaraanBaru || pelanggan.kendaraanDisewa;
            console.log(`Pelanggan ${namaLama} berhasil diperbarui.`);
            console.log("==================================");
        } else {
            console.log("Pelanggan tidak ditemukan.");
            console.log("==================================");
        }
    }
}

// membuat objek sistemTransportasi untuk mencatat pelanggan yang menyewa kendaraan
const sistemTransportasi = new ManajemenTransportasi();

// menambahkan pelanggan ke dalam sistemTransportasi
sistemTransportasi.tambahPelanggan("Budi", "08123456789", "Mobil");
sistemTransportasi.tambahPelanggan("Siti", "08987654321", "Motor");

// menampilkan daftar pelanggan yang menyewa kendaraan
console.log("Setelah Menambah Pelanggan:");
sistemTransportasi.tampilkanPelanggan();

// menghapus pelanggan dari sistemTransportasi
sistemTransportasi.hapusPelanggan("Siti");

// menampilkan daftar pelanggan yang menyewa kendaraan
console.log("Setelah Menghapus Pelanggan:");
sistemTransportasi.tampilkanPelanggan();

// memperbarui data pelanggan di sistemTransportasi
sistemTransportasi.updatePelanggan("Budi", "Budi Santoso", "08129876543", "Bus");

// menampilkan daftar pelanggan yang menyewa kendaraan
console.log("Setelah Memperbarui Pelanggan:");
sistemTransportasi.tampilkanPelanggan();
