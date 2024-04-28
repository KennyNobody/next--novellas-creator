import type { Meta, StoryObj } from '@storybook/react';
import { FormSubscription as FormSubscriptionComponent } from './FormSubscription';

const meta: Meta<typeof FormSubscriptionComponent> = {
    title: 'Features/FormSubscription',
    component: FormSubscriptionComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FormSubscription: Story = {
    render: (args) => (
        <FormSubscriptionComponent
            {...args}
        />
    ),
};
