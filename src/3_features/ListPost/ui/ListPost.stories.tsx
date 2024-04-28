import type { Meta, StoryObj } from '@storybook/react';
import { ListPost as ListPostComponent } from './ListPost';

const meta: Meta<typeof ListPostComponent> = {
    title: 'Features/ListPost',
    component: ListPostComponent,
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
        <ListPostComponent
            {...args}
        />
    ),
};
