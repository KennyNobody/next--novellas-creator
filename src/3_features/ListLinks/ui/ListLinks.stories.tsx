import type { Meta, StoryObj } from '@storybook/react';
import { ListLinks as ListLinksComponent } from './ListLinks';
import { data } from '../model/mocks/data';

const meta: Meta<typeof ListLinksComponent> = {
    title: 'Features/ListLinks',
    component: ListLinksComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        data,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ListLinks: Story = {
    render: (args) => (
        <ListLinksComponent
            {...args}
        />
    ),
};
