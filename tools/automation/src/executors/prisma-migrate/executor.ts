import { PrismaMigrateExecutorSchema } from './schema';
import { exec } from 'child_process';
import { promisify } from 'util';

export default async function runExecutor(
  options: PrismaMigrateExecutorSchema
) {
  console.log('Executor ran for PrismaMigrate', options);
  const { stdout, stderr } = await promisify(exec)(
    `npx env-cmd -f .local.env npx prisma migrate dev --schema=${options.schemaPath} --name=${options.migrationName}`
  );
  console.log(stdout);
  console.error(stderr);

  const success = !stderr;
  return { success };
}
