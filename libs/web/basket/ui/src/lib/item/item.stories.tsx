import type { Meta, StoryObj } from '@storybook/react';
import { Item } from './item';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Item> = {
  component: Item,
  title: 'Item',
};
export default meta;
type Story = StoryObj<typeof Item>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Item!/gi)).toBeTruthy();
  },
};
