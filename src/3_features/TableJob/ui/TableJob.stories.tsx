import type { Meta, StoryObj } from '@storybook/react';
import { TableJob as TableJobComponent } from './TableJob';

const meta: Meta<typeof TableJobComponent> = {
    title: 'Features/TableJob',
    component: TableJobComponent,
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
        <TableJobComponent
            {...args}
        />
    ),
};
