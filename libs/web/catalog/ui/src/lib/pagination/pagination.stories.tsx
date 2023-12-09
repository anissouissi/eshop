import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './pagination';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Pagination',
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Pagination!/gi)).toBeTruthy();
  },
};
