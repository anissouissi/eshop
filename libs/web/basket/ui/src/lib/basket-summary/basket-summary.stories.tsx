import type { Meta, StoryObj } from '@storybook/react';
import { BasketSummary } from './basket-summary';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BasketSummary> = {
  component: BasketSummary,
  title: 'BasketSummary',
};
export default meta;
type Story = StoryObj<typeof BasketSummary>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BasketSummary!/gi)).toBeTruthy();
  },
};
