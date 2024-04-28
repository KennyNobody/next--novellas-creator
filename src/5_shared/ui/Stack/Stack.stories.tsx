import type { Meta, StoryObj } from '@storybook/react';
import { Stack as StackComponent } from './Stack';

const meta: Meta<typeof StackComponent> = {
    title: 'Shared/Stack',
    component: StackComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Stack: Story = {
    render: (args) => (
        <StackComponent
            {...args}
        >
            <p>Stack child element</p>
            <p>Stack child element</p>
            <p>Stack child element</p>
        </StackComponent>
    ),
};
