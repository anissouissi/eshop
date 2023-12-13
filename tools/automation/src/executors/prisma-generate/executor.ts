import { PrismaGenerateExecutorSchema } from './schema';
import { exec } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs';

export default async function runExecutor(
  options: PrismaGenerateExecutorSchema
) {
  console.log('Executor ran for PrismaGenerate', options);
  const { stdout, stderr } = await promisify(exec)(
    `npx prisma generate --schema=${options.schemaPath}`
  );

  console.log(stdout);
  console.error(stderr);

  // issue with prisma-nestjs-graphql: param prismaClientImport not working
  // need to replace import in generated file manually
  const filePath = options.prismaGeneratedIndexFilePath;
  const content = fs.readFileSync(filePath, 'utf8');
  const result = content.replace('@prisma/client', options.prismaClientImport);
  fs.writeFileSync(filePath, result, 'utf8');

  const success = !stderr;

  return { success };
}
