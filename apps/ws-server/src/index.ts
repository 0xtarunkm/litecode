import { WebSocketServer } from 'ws';
import http from 'http';
import { createClient } from 'redis';

const subscriber = createClient();

const server = http.createServer();

const wss = new WebSocketServer({ server });

wss.on('connection', async (ws) => {
  ws.on('error', console.error);

  await subscriber.connect();

  ws.on('message', async () => {
    await subscriber.subscribe('submission-result', (msg) => {
      ws.send(msg);
    });
  });
});

server.listen(5001, () => {
  console.log(`Server is listening on port 8080`);
});
