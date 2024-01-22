import type { Meta, StoryObj } from '@storybook/react';
import { DeleteItem } from './delete-item';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DeleteItem> = {
  component: DeleteItem,
  title: 'DeleteItem',
};
export default meta;
type Story = StoryObj<typeof DeleteItem>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DeleteItem!/gi)).toBeTruthy();
  },
};
