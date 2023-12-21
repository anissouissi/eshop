import type { Meta, StoryObj } from '@storybook/react';
import { ErrorFallback } from './error-fallback';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ErrorFallback> = {
  component: ErrorFallback,
  title: 'ErrorFallback',
};
export default meta;
type Story = StoryObj<typeof ErrorFallback>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ErrorFallback!/gi)).toBeTruthy();
  },
};
