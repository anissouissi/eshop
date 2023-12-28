import type { Meta, StoryObj } from '@storybook/react';
import { FormRowVertical } from './form-row-vertical';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FormRowVertical> = {
  component: FormRowVertical,
  title: 'FormRowVertical',
};
export default meta;
type Story = StoryObj<typeof FormRowVertical>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FormRowVertical!/gi)).toBeTruthy();
  },
};
