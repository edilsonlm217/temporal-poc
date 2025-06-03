import { Worker } from '@temporalio/worker';
import * as dataSecrecyActivity from '../activities/data-secrecy.activities';

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('../workflows'),
    activities: {
      ...dataSecrecyActivity,
    },
    taskQueue: 'data-secrecy-task-queue',
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
