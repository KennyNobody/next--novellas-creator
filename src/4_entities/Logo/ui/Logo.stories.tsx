import type {Meta, StoryObj} from '@storybook/react';
import {Logo as LogoComponent, LogoMode} from './Logo';
import {data} from '../model/mocks/data';

const meta: Meta<typeof LogoComponent> = {
    title: 'Entities/Logo',
    component: LogoComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        data,
        mode: LogoMode.DARK,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
    render: (args) => (
        <LogoComponent
            {...args}
        />
    ),
};
