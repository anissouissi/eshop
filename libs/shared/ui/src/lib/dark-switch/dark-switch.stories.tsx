import type { Meta, StoryObj } from '@storybook/react';
import { DarkSwitch } from './dark-switch';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DarkSwitch> = {
  component: DarkSwitch,
  title: 'DarkSwitch',
};
export default meta;
type Story = StoryObj<typeof DarkSwitch>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DarkSwitch!/gi)).toBeTruthy();
  },
};
