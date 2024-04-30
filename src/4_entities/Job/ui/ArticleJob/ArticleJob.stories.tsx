import type { Meta, StoryObj } from '@storybook/react';
import { ArticleJob as ArticlePostComponent } from './ArticleJob';
import { data } from '../../model/mocks/data';

const meta: Meta<typeof ArticlePostComponent> = {
    title: 'Entities/Post',
    component: ArticlePostComponent,
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

export const ArticlePost: Story = {
    render: (args) => (
        <ArticlePostComponent
            {...args}
        />
    ),
};
