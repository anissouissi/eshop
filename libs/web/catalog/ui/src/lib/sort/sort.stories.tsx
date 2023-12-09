import type { Meta, StoryObj } from '@storybook/react';
import { Sort } from './sort';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Sort> = {
  component: Sort,
  title: 'Sort',
};
export default meta;
type Story = StoryObj<typeof Sort>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Sort!/gi)).toBeTruthy();
  },
};
