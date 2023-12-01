import type { Meta, StoryObj } from '@storybook/react';
import { TechStack } from './tech-stack';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TechStack> = {
  component: TechStack,
  title: 'TechStack',
};
export default meta;
type Story = StoryObj<typeof TechStack>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TechStack!/gi)).toBeTruthy();
  },
};
