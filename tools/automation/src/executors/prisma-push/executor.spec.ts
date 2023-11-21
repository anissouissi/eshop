import { PrismaPushExecutorSchema } from './schema';
import executor from './executor';

const options: PrismaPushExecutorSchema = {};

describe('PrismaPush Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
