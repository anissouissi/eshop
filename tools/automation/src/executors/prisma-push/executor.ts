import { PrismaPushExecutorSchema } from './schema';
import { exec } from 'child_process';
import { promisify } from 'util';

export default async function runExecutor(options: PrismaPushExecutorSchema) {
  console.log('Executor ran for PrismaPush', options);
  const { stdout, stderr } = await promisify(exec)(
    `npx env-cmd -f .local.env npx prisma db push --schema=${options.schemaPath}`
  );
  console.log(stdout);
  console.error(stderr);

  const success = !stderr;
  return { success };
}
