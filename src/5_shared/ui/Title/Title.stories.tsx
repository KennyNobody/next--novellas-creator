import type { Meta, StoryObj } from '@storybook/react';
import { Title as TitleComponent, TitleMode } from './Title';

const meta = {
    title: 'Shared/Title',
    component: TitleComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        tag: 'h2',
        mode: TitleMode.MARKUP,
        text: '<p><strong>Заголовок</strong><br>в две строки</p>',
    },
} satisfies Meta<typeof TitleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
// @ts-ignore
export const Title: Story = {};
