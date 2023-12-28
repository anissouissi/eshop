import type { Meta, StoryObj } from '@storybook/react';
import { FormRow } from './form-row';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FormRow> = {
  component: FormRow,
  title: 'FormRow',
};
export default meta;
type Story = StoryObj<typeof FormRow>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FormRow!/gi)).toBeTruthy();
  },
};
