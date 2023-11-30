import type { Meta, StoryObj } from '@storybook/react';
import { Availability } from './availability';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Availability> = {
  component: Availability,
  title: 'Availability',
};
export default meta;
type Story = StoryObj<typeof Availability>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Availability!/gi)).toBeTruthy();
  },
};
