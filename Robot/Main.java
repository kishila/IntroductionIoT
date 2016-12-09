import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class Main {

    public static void main(String[] args) throws Exception {
        System.out.println("start >>>");

        try (
              ServerSocket server = new ServerSocket(80);
              Socket socket = server.accept();
              BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream(), "UTF-8"));
              ) {

                String line = in.readLine();
                StringBuilder header = new StringBuilder();
                int contentLength = 0;

                while (line != null && !line.isEmpty()) {
                  if (line.startsWith("Content-Length")) { // ★Content-Length を取得
                    contentLength = Integer.parseInt(line.split(":")[1].trim());
                  }

                  header.append(line + "\n");
                  line = in.readLine();
                }

                String body = null;

                if (0 < contentLength) { // ★Content-Length 分取得
                  char[] c = new char[contentLength];
                  in.read(c);
                  body = new String(c);
                }

                //System.out.println(header);
                System.out.println(body);
              }
              System.out.println("<<< end");
          }
}
