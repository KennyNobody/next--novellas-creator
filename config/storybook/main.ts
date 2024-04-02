import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';
import { webpack } from 'next/dist/compiled/webpack/webpack';

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.mdx',
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    staticDirs: ['../../public'],
    // @ts-ignore
    webpackFinal: async (configWebpack: webpack.Configuration) => {
        configWebpack.resolve.alias = {
            ...configWebpack.resolve.alias,
            '@/src': path.resolve(__dirname, '../src'),
        };

        return configWebpack;
    },
};
export default config;
