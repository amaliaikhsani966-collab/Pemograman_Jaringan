
const fs = require("fs");
const { XMLBuilder, XMLParser } = require("fast-xml-parser");

// 1. Membuat objek mahasiswa
const mahasiswa = {
    NIM: 24131310160,
    Nama: "Amalia Ikhsani",
    Jurusan: "Teknologi Informasi",
    MataKuliah: [
        "Pemrograman Jaringan",
        "Basis Data"
    ]
};

// 2. Serialisasi menjadi JSON
const jsonString = JSON.stringify(mahasiswa, null, 2);

// 3. Simpan JSON ke file
fs.writeFileSync("mahasiswa.json", jsonString);
console.log("JSON berhasil disimpan!");

// 4. Serialisasi menjadi XML
const builder = new XMLBuilder({ format: true });
const xmlString = builder.build({
    Mahasiswa: mahasiswa
});

// 5. Simpan XML ke file
fs.writeFileSync("mahasiswa.xml", xmlString);
console.log("XML berhasil disimpan!");

// 6. Baca file JSON dan deserialisasi
const jsonDibaca = fs.readFileSync("mahasiswa.json", "utf8");
const hasilJson = JSON.parse(jsonDibaca);

console.log("\nHasil deserialisasi JSON:");
console.log(hasilJson);

// 7. Baca file XML dan deserialisasi
const xmlDibaca = fs.readFileSync("mahasiswa.xml", "utf8");
const parser = new XMLParser();
const hasilXml = parser.parse(xmlDibaca);

console.log("\nHasil deserialisasi XML:");
console.log(hasilXml);
