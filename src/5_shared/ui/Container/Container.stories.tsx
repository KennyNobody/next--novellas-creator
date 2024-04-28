import type { Meta, StoryObj } from '@storybook/react';
import { Container as ContainerComponent } from './Container';

const meta: Meta<typeof ContainerComponent> = {
    title: 'Shared/Container',
    component: ContainerComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Container: Story = {
    render: (args) => (
        <ContainerComponent
            {...args}
        >
            Container child element
        </ContainerComponent>
    ),
};
