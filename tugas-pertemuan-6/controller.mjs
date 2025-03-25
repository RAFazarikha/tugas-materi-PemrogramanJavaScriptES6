import users from "./data.mjs";

const index = () => {
    console.log("Menampilkan data:");
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
};

const store = (user) => {
    users.push(user);
    console.log("Data berhasil ditambahkan!");
};

const destroy = () => {
    if (users.length > 0) {
        users.pop();
        console.log("Data terakhir berhasil dihapus!");
    } else {
        console.log("Tidak ada data untuk dihapus.");
    }
};

export { index, store, destroy };
