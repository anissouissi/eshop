import type { Meta, StoryObj } from '@storybook/react';
import { PaymentForm } from './payment-form';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PaymentForm> = {
  component: PaymentForm,
  title: 'PaymentForm',
};
export default meta;
type Story = StoryObj<typeof PaymentForm>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to PaymentForm!/gi)).toBeTruthy();
  },
};
