import type { Meta, StoryObj } from '@storybook/react';
import { Toolbar as ToolbarComponent } from './Toolbar';

const meta: Meta<typeof ToolbarComponent> = {
    title: 'Shared/Toolbar',
    component: ToolbarComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Toolbar: Story = {
    render: () => (
        <ToolbarComponent>
            <div>Лево</div>
            <div>Право</div>
        </ToolbarComponent>
    ),
};
