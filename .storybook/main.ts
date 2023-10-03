import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        '@/': path.resolve(__dirname, '../src'),
        '@/public': path.resolve(__dirname, '../public'),
        '@/components': path.resolve(__dirname, '../src/components'),
        '@/pages': path.resolve(__dirname, '../src/pages'),
        '@/styles': path.resolve(__dirname, '../src/styles'),
        '@/lib': path.resolve(__dirname, '../src/lib'),
      };
    }

    return config;
  },
};
export default config;
