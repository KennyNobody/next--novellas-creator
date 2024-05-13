import type { Meta, StoryObj } from '@storybook/react';
import {
    Section as SectionComponent, SectionDecorType, SectionTagType, SectionThemeMode,
} from './Section';

const meta: Meta<typeof SectionComponent> = {
    title: 'Shared/Section',
    component: SectionComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        tag: SectionTagType.DIV,
        decor: SectionDecorType.FULL,
        theme: SectionThemeMode.LiGHT,
        style: {
            height: '50vh',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Section: Story = {
    render: (args) => (
        <SectionComponent
            {...args}
        >
            Контент секции
        </SectionComponent>
    ),
};
