import type { Meta, StoryObj } from '@storybook/react';
import { Discount } from './discount';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Discount> = {
  component: Discount,
  title: 'Discount',
};
export default meta;
type Story = StoryObj<typeof Discount>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Discount!/gi)).toBeTruthy();
  },
};
