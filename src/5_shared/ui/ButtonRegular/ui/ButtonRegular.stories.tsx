import type { Meta, StoryObj } from '@storybook/react';
import { ButtonRegular as ButtonRegularComponent } from './ButtonRegular';
import { ButtonTagType } from '../types/ButtonRegular';

const meta = {
    title: 'Shared/ButtonRegular',
    component: ButtonRegularComponent,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {
        disabled: false,
        tag: ButtonTagType.BUTTON,
        label: 'Кнопка',
        //     onLogin: fn(),
        //     onLogout: fn(),
        //     onCreateAccount: fn(),
    },
} satisfies Meta<typeof ButtonRegularComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
// @ts-ignore
export const ButtonRegular: Story = {};
