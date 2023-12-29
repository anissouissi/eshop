import type { Meta, StoryObj } from '@storybook/react';
import { SignUpForm } from './sign-up-form';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  title: 'SignUpForm',
};
export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SignUpForm!/gi)).toBeTruthy();
  },
};
