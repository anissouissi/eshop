import type { Meta, StoryObj } from '@storybook/react';
import { FilterList } from './filter-list';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FilterList> = {
  component: FilterList,
  title: 'FilterList',
};
export default meta;
type Story = StoryObj<typeof FilterList>;

export const Primary = {
  args: {
    list: [
      'automotive',
      'fragrances',
      'furniture',
      'groceries',
      'home-decoration',
      'laptops',
      'lighting',
      'mens-shirts',
      'mens-shoes',
      'mens-watches',
      'motorcycle',
      'skincare',
      'smartphones',
      'sunglasses',
      'tops',
      'womens-bags',
      'womens-dresses',
      'womens-jewellery',
      'womens-shoes',
      'womens-watches',
    ],
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FilterList!/gi)).toBeTruthy();
  },
};
