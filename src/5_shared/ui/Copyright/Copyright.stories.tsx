import type { Meta, StoryObj } from '@storybook/react';
import { Copyright as CopyrightComponent } from './Copyright';

const meta = {
    title: 'Shared/Copyright',
    component: CopyrightComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        text: 'Company 2024',
    },
} satisfies Meta<typeof CopyrightComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
// @ts-ignore
export const Copyright: Story = {};
