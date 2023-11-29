import type { Meta, StoryObj } from '@storybook/react';
import { Cart } from './cart';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Cart> = {
  component: Cart,
  title: 'Cart',
};
export default meta;
type Story = StoryObj<typeof Cart>;

export const EmptyCart: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByTestId('products-count')).toBeNull();
  },
};

export const CartHasProducts: Story = {
  args: { productsCount: 10 },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByTestId('products-count');
    expect(badge.innerText).toBe('10');
  },
};
