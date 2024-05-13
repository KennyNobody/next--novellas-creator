import type { Meta, StoryObj } from '@storybook/react';
import { ListGames as ListPostComponent } from './ListGames';

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
