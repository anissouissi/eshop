import type { Meta, StoryObj } from '@storybook/react';
import { BasketEmpty } from './basket-empty';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BasketEmpty> = {
  component: BasketEmpty,
  title: 'BasketEmpty',
};
export default meta;
type Story = StoryObj<typeof BasketEmpty>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BasketEmpty!/gi)).toBeTruthy();
  },
};
