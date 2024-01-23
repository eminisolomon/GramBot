import * as express from 'express';
import { PORT } from './core/config';

async function main(): Promise<void> {
  const app = express.default();

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });

  // graceful shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received.');
    console.log('Express app closed.');
    process.exit(0);
  });
}

main();
