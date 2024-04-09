import { WebSocketServer } from 'ws';
import http from 'http';
import { createClient } from 'redis';

const subscriber = createClient();

const server = http.createServer();
subscriber.connect();

const wss = new WebSocketServer({ server });

wss.on('connection', async (ws) => {
  ws.on('error', console.error);

  ws.on('message', async () => {
    await subscriber.subscribe('submission-result', (msg) => {
      ws.send(msg);
    });
  });

  ws.on('close', async () => {
    await subscriber.disconnect();
  });
});

server.listen(5001, () => {
  console.log(`Server is listening on port 5001`);
});
