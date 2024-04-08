import { exec } from 'child_process';
import path from 'path';

export function runBuildCommand(image_name: string) {
  const absolutePath = path.resolve(__dirname, '../../code');
  return new Promise((resolve, reject) => {
    exec(
      `docker build -t ${image_name} ${absolutePath}`,
      (error, stdout, stderr) => {
        if (error) {
          // console.error(`Error running Docker command: ${error.message}`);
          reject(error);
        }
        if (stderr) {
          // console.error(`Docker command stderr: ${stderr}`);
        }
        // console.log(`Docker command stdout: ${stdout}`);
        resolve(stdout);
      }
    );
  });
}

export function runContainer(image_name: string) {
  return new Promise((resolve, reject) => {
    exec(`docker run ${image_name}`, (error, stdout, stderr) => {
      if (stderr) {
        // console.error(`Docker command stderr: ${stderr}`);
        reject(stderr);
      }
      // console.log(`Docker command stdout: ${stdout}`);
      resolve(stdout);
    });
  });
}
