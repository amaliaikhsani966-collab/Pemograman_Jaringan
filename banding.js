
const fs = require("fs");

const data = {
    NIM: 24131310160,
    Nama: "Amalia Ikhsani",
    Jurusan: "Teknologi Informasi"
};

const json = JSON.stringify(data, null, 2);

const xml = `<Mahasiswa>
    <NIM>${data.NIM}</NIM>
    <Nama>${data.Nama}</Nama>
    <Jurusan>${data.Jurusan}</Jurusan>
</Mahasiswa>`;

fs.writeFileSync("banding.json", json);
fs.writeFileSync("banding.xml", xml);

console.log("Ukuran JSON:", Buffer.byteLength(json), "byte");
console.log("Ukuran XML:", Buffer.byteLength(xml), "byte");

console.log("\nJSON:");
console.log(json);

console.log("\nXML:");
console.log(xml);
