
import java.net.*;
import java.nio.charset.StandardCharsets;
import java.io.IOException;

public class Server {
    public static void main(String[] args) {
        int port = 5000;

        try (DatagramSocket serverSocket =
                     new DatagramSocket(port)) {

            System.out.println("Echo Server aktif di port " + port);

            byte[] buffer = new byte[1024];

            while (true) {
                DatagramPacket receivePacket =
                    new DatagramPacket(buffer, buffer.length);

                serverSocket.receive(receivePacket);

                String pesan = new String(
                    receivePacket.getData(),
                    receivePacket.getOffset(),
                    receivePacket.getLength(),
                    StandardCharsets.UTF_8
                );

                System.out.println("Pesan: " + pesan);

                String balasan = pesan.toUpperCase();

                byte[] dataBalasan =
                    balasan.getBytes(StandardCharsets.UTF_8);

                DatagramPacket sendPacket =
                    new DatagramPacket(
                        dataBalasan,
                        dataBalasan.length,
                        receivePacket.getAddress(),
                        receivePacket.getPort()
                    );

                serverSocket.send(sendPacket);

                System.out.println("Balasan: " + balasan);

                if (pesan.trim().equalsIgnoreCase("EXIT")) {
                    break;
                }
            }

            System.out.println("Server berhenti.");

        } catch (IOException e) {
            System.out.println("Error Server: " + e.getMessage());
        }
    }
}
