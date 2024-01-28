import type { Meta, StoryObj } from '@storybook/react';
import { ShippingForm } from './shipping-form';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ShippingForm> = {
  component: ShippingForm,
  title: 'ShippingForm',
};
export default meta;
type Story = StoryObj<typeof ShippingForm>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ShippingForm!/gi)).toBeTruthy();
  },
};
