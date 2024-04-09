import { createClient } from 'redis';
import path from 'path';
import { exec } from 'child_process';

export const client = createClient();

export function buildProject(
  code: string,
  testcase: string,
  imageName: string
) {
  return new Promise((resolve) => {
    const child = exec(
      `echo "${code}" > ${path.join(__dirname, '../code/code.js')} && echo "${testcase}" > ${path.join(__dirname, '../code/testcase.test.js')} && docker build -t ${imageName} ${path.join(__dirname, '../code')} && docker run ${imageName}`
    );

    child.stdout?.on('data', function (data) {
      console.log('stdout: ' + data);
    });
    child.stderr?.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    child.on('close', function (code) {
      resolve('');
    });
  });
}

(async () => {
  await client.connect();

  const submission = await client.brPop('problems-queue', 0);

  if (submission?.element === null) return;
  const submissionObject = JSON.parse(submission?.element!);

  await buildProject(
    submissionObject.payload.code,
    submissionObject.payload.testcase,
    submissionObject.payload.problemId
  );
})();
