import { createClient } from 'redis';

export const client = createClient();

client.on('error', (err) => console.log(`Error: ${err}`));

async function startRedis() {
  try {
    await client.connect();
    console.log('Connected to Redis client');
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

startRedis();
