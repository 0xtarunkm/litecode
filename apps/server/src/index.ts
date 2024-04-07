import { createClient } from 'redis';
import { processSubmission } from './lib/processSubmission';

const client = createClient();

async function startWorker() {
  try {
    await client.connect();
    console.log('Connected to Redis client');

    while (true) {
      try {
        const submission = await client.brPop('problems-queue', 0);

        // console.log(`Received submission: ${JSON.stringify(submission)}`);
        if (submission?.element === null) continue;
        await processSubmission(JSON.parse(submission?.element!));
      } catch (error) {
        throw new Error(`Error: ${error}`);
      }
    }
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

startWorker();
