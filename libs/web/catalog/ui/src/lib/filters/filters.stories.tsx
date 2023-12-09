import type { Meta, StoryObj } from '@storybook/react';
import { Filters } from './filters';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Filters> = {
  component: Filters,
  title: 'Filters',
};
export default meta;
type Story = StoryObj<typeof Filters>;

export const Primary = {
  args: {
    brands: [
      'Al Munakh',
      'AmnaMart',
      'Apple',
      'Arrivals Genuine',
      'BRAVE BULL',
      'Bake Parlor Big',
      'Baking Food Items',
      'Boho Decor',
      'Bracelet',
      'Car Aux',
      'Copenhagen Luxe',
      'Cuff Butterfly',
      'DADAWU',
      'Darojay',
      'Dermive',
      'Designer Sun Glasses',
      'Digital Printed',
      'Dry Rose',
      'Eastern Watches',
      'FREE FIRE',
      'Fair & Clear',
      'Fashion Jewellery',
      'Flying Wooden',
      'Fog Scent Xpressio',
      'Furniture Bed Set',
      'Ghazi Fabric',
      'Golden',
      'HP Pavilion',
      'Hemani Tea',
      'Huawei',
      'IELGY',
      'IELGY fashion',
      'Ifei Home',
      'Impression of Acqua Di Gio',
      'Infinix',
      'JIEPOLLY',
      'Kitchen Shelf',
      "L'Oreal Paris",
      'LED Lights',
      'Lord - Al-Rehab',
      'LouisWill',
      'Luxury Digital',
      'METRO 70cc Motorcycle - MR70',
      'Maasai Sandals',
      'Microsoft Surface',
      'Multi Purpose',
      'Naviforce',
      'Neon LED Light',
      'OPPO',
      'Professional Wear',
      'RED MICKY MOUSE..',
      'ROREC White Rice',
      'Ratttan Outdoor',
      'Royal_Mirage',
      'Rubber',
      'SKMEI 9117',
      'Saaf & Khaas',
      'Samsung',
      'Sandals Flip Flops',
      'Sneakers',
      'Soft Cotton',
      'Stainless',
      'Steal Frame',
      'Strap Skeleton',
      'Synthetic Leather',
      'TC Reusable',
      'The Warehouse',
      'Top Sweater',
      'Vintage Apparel',
      'W1209 DC12V',
      'Watch Pearls',
      'Xiangle',
      'YIOSI',
      'fauji',
      'lightingbrilliance',
      'luxury palace',
      'mastar watch',
      'shock absorber',
    ],
    categories: [
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
    expect(canvas.getByText(/Welcome to Filters!/gi)).toBeTruthy();
  },
};
