import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './navbar';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { AvatarProps } from '../avatar/avatar';
import { CartProps } from '../cart/cart';
import { EmptyAvatar, InitialsAvatar } from '../avatar/avatar.stories';
import { CartHasProducts, EmptyCart } from '../cart/cart.stories';

type NavbarWithAvatarAndCartPropsArgs = React.ComponentProps<typeof Navbar> &
  AvatarProps &
  CartProps;

const meta: Meta<NavbarWithAvatarAndCartPropsArgs> = {
  component: Navbar,
  title: 'Navbar',
};
export default meta;
type Story = StoryObj<NavbarWithAvatarAndCartPropsArgs>;

export const Primary: Story = {
  args: {},
  play: async (context) => {
    if (EmptyAvatar.play) {
      await EmptyAvatar.play(context);
    }
    if (EmptyCart.play) {
      await EmptyCart.play(context);
    }
    const { canvasElement } = context;
    const canvas = within(canvasElement);
    const signInButton = canvas.getByText('Sign in');
    expect(signInButton).toBeDefined();
  },
};

export const UserLogged: Story = {
  args: {
    user: { initials: 'AS' },
  },
  play: async (context) => {
    if (InitialsAvatar.play) {
      await InitialsAvatar.play(context);
    }
    if (EmptyCart.play) {
      await EmptyCart.play(context);
    }
    const { canvasElement } = context;
    const canvas = within(canvasElement);
    const signInButton = canvas.queryByText('Sign in');
    expect(signInButton).toBeNull();
  },
};

export const HasProductsInCart: Story = {
  args: {
    productCount: 10,
  },
  play: async (context) => {
    if (EmptyAvatar.play) {
      await EmptyAvatar.play(context);
    }
    if (CartHasProducts.play) {
      await CartHasProducts.play(context);
    }
    const { canvasElement } = context;
    const canvas = within(canvasElement);
    const signInButton = canvas.getByText('Sign in');
    expect(signInButton).toBeDefined();
  },
};

export const UserLoggedAndHasProductsInCart: Story = {
  args: {
    user: { initials: 'AS' },
    productCount: 10,
  },
  play: async (context) => {
    if (InitialsAvatar.play) {
      await InitialsAvatar.play(context);
    }
    if (CartHasProducts.play) {
      await CartHasProducts.play(context);
    }
    const { canvasElement } = context;
    const canvas = within(canvasElement);
    const signInButton = canvas.queryByText('Sign in');
    expect(signInButton).toBeNull();
  },
};
