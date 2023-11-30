import './tailwind-imports.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: 'eShop', dataTheme: 'eshop', color: '#07689F' },
        { name: 'Dark', dataTheme: 'dark', color: '#000' },
      ],
    },
  },
  dataTheme: {
    defaultValue: 'eshop',
  },
};

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
