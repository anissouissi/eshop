import type { Meta, StoryObj } from '@storybook/react';
import { ProductDetails } from './product-details';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ProductDetails> = {
  component: ProductDetails,
  title: 'ProductDetails',
};
export default meta;
type Story = StoryObj<typeof ProductDetails>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ProductDetails!/gi)).toBeTruthy();
  },
};
