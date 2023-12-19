import './tailwind-imports.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: 'Light', dataTheme: 'light', color: '#fff' },
        { name: 'Dark', dataTheme: 'dark', color: '#000' },
      ],
    },
  },
  dataTheme: {
    defaultValue: 'light',
  },
};

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
