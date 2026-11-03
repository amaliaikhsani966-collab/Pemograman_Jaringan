const fs = require("fs");

const sumber = fs.createReadStream("input_besar.txt");
const tujuan = fs.createWriteStream("output_salinan.txt");

sumber.pipe(tujuan);

tujuan.on("finish", () => {
    console.log("File berhasil disalin!");
});

sumber.on("error", (err) => {
    console.log("Terjadi kesalahan:", err.message);
});