import { Submission } from './types';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

export async function processSubmission(submission: Submission) {
  const absolutePath = path.resolve(__dirname, '../../code');

  if (
    fs.existsSync(absolutePath + '/code.js') &&
    fs.existsSync(absolutePath + '/testcase.test.js')
  ) {
    fs.writeFileSync(absolutePath + '/code.js', submission.payload.code);
    fs.writeFileSync(
      absolutePath + '/testcase.test.js',
      submission.payload.testcase
    );
  }

  try {
    // write the code to build the docker image docker file is already there in the code folder
    await exec(
      `docker build -t ${submission.payload.problemId} ${absolutePath}`
    );

    // run the docker container
    const response = await exec(`docker run ${submission.payload.problemId}`);
    response.on('stdout', (data) => {
      console.log(data);
    });

    // delete the docker container
    await exec(`docker rmi -f ${submission.payload.problemId}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
