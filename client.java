
import java.net.*;
import java.nio.charset.StandardCharsets;
import java.io.IOException;
import java.util.Scanner;

public class Client {
    public static void main(String[] args) {
        int port = 5000;

        try (
            DatagramSocket clientSocket = new DatagramSocket();
            Scanner input = new Scanner(System.in)
        ) {
            InetAddress alamatServer =
                InetAddress.getByName("127.0.0.1");

            while (true) {
                System.out.print("Masukkan pesan: ");
                String pesan = input.nextLine();

                byte[] dataKirim =
                    pesan.getBytes(StandardCharsets.UTF_8);

                DatagramPacket sendPacket =
                    new DatagramPacket(
                        dataKirim,
                        dataKirim.length,
                        alamatServer,
                        port
                    );

                clientSocket.send(sendPacket);

                byte[] buffer = new byte[1024];

                DatagramPacket receivePacket =
                    new DatagramPacket(buffer, buffer.length);

                clientSocket.receive(receivePacket);

                String balasan = new String(
                    receivePacket.getData(),
                    receivePacket.getOffset(),
                    receivePacket.getLength(),
                    StandardCharsets.UTF_8
                );

                System.out.println("Balasan Server: " + balasan);

                if (pesan.trim().equalsIgnoreCase("EXIT")) {
                    break;
                }
            }

            System.out.println("Client berhenti.");

        } catch (IOException e) {
            System.out.println("Error Client: " + e.getMessage());
        }
    }
}
