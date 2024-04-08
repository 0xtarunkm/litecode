import { createClient } from 'redis';
import { runBuildCommand, runContainer } from './lib/docker';

export const client = createClient();

async function startWorker() {
  try {
    await client.connect();
    console.log('Connected to Redis client');

    while (true) {
      try {
        const submission = await client.brPop('problems-queue', 0);

        // console.log(`Received submission: ${JSON.stringify(submission)}`);
        if (submission?.element === null) continue;
        const submissionObject = JSON.parse(submission?.element!);

        await runBuildCommand(submissionObject.payload.problemId);

        await runContainer(submissionObject.payload.problemId)
          .then((data) => {
            client.publish(
              'submission_output',
              JSON.stringify({
                userId: submissionObject.payload.userId,
                output: data,
                type: 'success',
              })
            );
          })
          .catch((error) => {
            client.publish(
              'submission_output',
              JSON.stringify({
                userId: submissionObject.payload.userId,
                output: error,
                type: 'failed',
              })
            );
          });
      } catch (error) {
        throw new Error(`Error: ${error}`);
      }
    }
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

startWorker();
