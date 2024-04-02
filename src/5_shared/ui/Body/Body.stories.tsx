import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Body as BodyComponent } from './Body';

const meta: Meta<typeof BodyComponent> = {
    title: 'Shared/Body',
    component: BodyComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        isStorybook: true,
    },
    // args: {
    //     onLogin: fn(),
    //     onLogout: fn(),
    //     onCreateAccount: fn(),
    // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
    render: (args) => (
        <BodyComponent
            {...args}
        >
            Body children
        </BodyComponent>
    ),
};
