import type { Meta, StoryObj } from '@storybook/react';
import { Price } from './price';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Price> = {
  component: Price,
  title: 'Price',
};
export default meta;
type Story = StoryObj<typeof Price>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Price!/gi)).toBeTruthy();
  },
};
