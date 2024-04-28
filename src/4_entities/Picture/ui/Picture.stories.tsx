import type { Meta, StoryObj } from '@storybook/react';
import { pictureMock } from '../model/mocks/data';
import { Picture as PictureComponent } from './Picture';

const meta: Meta<typeof PictureComponent> = {
    title: 'Entities/Picture',
    component: PictureComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        data: pictureMock,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Picture: Story = {
    render: (args) => (
        <PictureComponent
            {...args}
        />
    ),
};
