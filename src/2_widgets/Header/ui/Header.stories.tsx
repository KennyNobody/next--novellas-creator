import type { Meta, StoryObj } from '@storybook/react';
import { Header as HeaderComponent } from './Header';

const meta: Meta<typeof HeaderComponent> = {
    title: 'Widgets/Header',
    component: HeaderComponent, // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
    // render: () => {
    //     <Footer />
    // }
    render: () => <div>Header</div>,
};
