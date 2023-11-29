import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const EmptyAvatar: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByTestId('user-initials')).toBeNull();
  },
};

export const InitialsAvatar: Story = {
  args: { userInitials: 'AS' },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spanInitials = canvas.getByTestId('user-initials');
    expect(spanInitials.innerText).toBe('AS');
  },
};
