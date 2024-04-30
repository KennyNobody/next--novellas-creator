import type { Meta, StoryObj } from '@storybook/react';
import { PreviewListPost as PreviewListPostComponent } from './PreviewListPost';

const meta: Meta<typeof PreviewListPostComponent> = {
    title: 'Features/PreviewListPost',
    component: PreviewListPostComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ListPost: Story = {
    render: (args) => (
        <PreviewListPostComponent
            {...args}
        />
    ),
};
