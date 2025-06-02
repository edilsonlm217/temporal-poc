import { Worker } from '@temporalio/worker';
import * as firstActivities from './activities/first.activities';
import * as secondActivities from './activities/second.activities';

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows'),
    activities: {
      ...firstActivities,
      ...secondActivities,
    },
    taskQueue: 'example-task-queue',
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
