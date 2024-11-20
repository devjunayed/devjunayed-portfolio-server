import app from "./app";
import config from "./app/config";
import {Server} from 'http';

let server: Server;

async function main() {
  try {
    server = app.listen(config.port, () => {
      console.log(`Server is running on port: ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();