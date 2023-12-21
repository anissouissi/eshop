import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './product-card';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  title: 'Product',
};
export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Primary = {
  args: {
    product: {
      id: 97,
      title: 'Metal Ceramic Flower',
      description:
        'Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp',
      price: 35,
      discountPercentage: 10.94,
      rating: 4.93,
      stock: 146,
      brand: 'Ifei Home',
      category: 'lighting',
      thumbnail: 'https://i.dummyjson.com/data/products/97/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/97/1.jpg',
        'https://i.dummyjson.com/data/products/97/2.jpg',
        'https://i.dummyjson.com/data/products/97/3.jpg',
        'https://i.dummyjson.com/data/products/97/4.webp',
        'https://i.dummyjson.com/data/products/97/thumbnail.jpg',
      ],
    },
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Card!/gi)).toBeTruthy();
  },
};
