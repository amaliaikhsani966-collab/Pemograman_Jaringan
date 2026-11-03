const net = require("net");

const client = net.createConnection(
    { host: "127.0.0.1", port: 5005 },
    () => {
        console.log("Terhubung ke server!");
        client.write("Halo server, ini pesan dari client.");
    }
);

client.on("data", (data) => {
    console.log("Balasan server:", data.toString());
    client.end();
});

client.on("error", (err) => {
    console.log("Koneksi gagal:", err.message);
});