import type { Meta, StoryObj } from '@storybook/react';
import { Footer as FooterComponent } from './Footer';

const meta: Meta<typeof FooterComponent> = {
    title: 'Widgets/Footer',
    component: FooterComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {
    // render: () => {
    //     <Footer />
    // }
    render: () => <div>Footer</div>,
};
