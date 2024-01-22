import type { Meta, StoryObj } from '@storybook/react';
import { UpdateItemQuantity } from './update-item-quantity';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UpdateItemQuantity> = {
  component: UpdateItemQuantity,
  title: 'UpdateItemQuantity',
};
export default meta;
type Story = StoryObj<typeof UpdateItemQuantity>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UpdateItemQuantity!/gi)).toBeTruthy();
  },
};
