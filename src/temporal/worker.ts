import { Worker } from '@temporalio/worker';

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows/example.workflow'),
    activities: require('./activities/example.activities'),
    taskQueue: 'example-task-queue',
  });
  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
