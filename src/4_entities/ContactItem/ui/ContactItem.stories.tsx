import type { Meta, StoryObj } from '@storybook/react';
import { ContactItem as ContactItemComponent } from './ContactItem';

const meta: Meta<typeof ContactItemComponent> = {
    title: 'Entities/ContactItem',
    component: ContactItemComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        data: {
            title: 'Заголовок',
            link: 'example@email.com',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactItem: Story = {
    render: (args) => (
        <ContactItemComponent
            {...args}
        />
    ),
};
