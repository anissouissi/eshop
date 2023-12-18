import { PrismaGenerateExecutorSchema } from './schema';
import { exec } from 'child_process';
import { promisify } from 'util';

export default async function runExecutor(
  options: PrismaGenerateExecutorSchema
) {
  console.log('Executor ran for PrismaGenerate', options);
  const { stdout, stderr } = await promisify(exec)(
    `npx prisma generate --schema=${options.schemaPath}`
  );

  console.log(stdout);
  console.error(stderr);

  const success = !stderr;

  return { success };
}
