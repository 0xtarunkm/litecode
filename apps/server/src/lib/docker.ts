import { exec } from 'child_process';
import path from 'path';

export function runBuildCommand(image_name: string) {
  const absolutePath = path.resolve(__dirname, '../../code');
  return new Promise((resolve, reject) => {
    exec(
      `docker build -t ${image_name} ${absolutePath}`,
      (error, stdout, stderr) => {
        if (stderr) {
          reject(error);
        }
        resolve(stdout);
      }
    );
  });
}

export function runContainer(image_name: string) {
  return new Promise((resolve, reject) => {
    exec(`docker run ${image_name}`, (error, stdout, stderr) => {
      if (stderr) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
}
