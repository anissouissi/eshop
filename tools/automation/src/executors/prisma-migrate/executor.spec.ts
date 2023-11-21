import { PrismaMigrateExecutorSchema } from './schema';
import executor from './executor';

const options: PrismaMigrateExecutorSchema = {};

describe('PrismaMigrate Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
