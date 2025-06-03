import { Worker } from '@temporalio/worker';
import * as cdrActivities from '../activities/cdr.activity';
import * as ipdrActivities from '../activities/ipdr.activity';

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('../workflows'),
    activities: {
      ...cdrActivities,
      ...ipdrActivities,
    },
    taskQueue: 'data-secrecy-task-queue',
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
