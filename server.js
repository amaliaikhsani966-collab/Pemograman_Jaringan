const net = require("net");

const server = net.createServer((socket) => {
    console.log("Client terhubung!");

    socket.on("data", (data) => {
        console.log("Pesan client:", data.toString());
        socket.write("Pesan berhasil diterima server!");
    });

    socket.on("end", () => {
        console.log("Client terputus.");
    });
});

server.listen(5005, "127.0.0.1", () => {
    console.log("Server berjalan di port 5005");
});