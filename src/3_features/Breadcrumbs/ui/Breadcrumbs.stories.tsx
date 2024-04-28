import type { Meta, StoryObj } from '@storybook/react';
import { RouteSlug } from '5_shared/config/routes';
import { Breadcrumbs as BreadcrumbsComponent } from './Breadcrumbs';

const meta: Meta<typeof BreadcrumbsComponent> = {
    title: 'Features/Breadcrumbs',
    component: BreadcrumbsComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        slug: RouteSlug.NEWS,
        title: 'Заголовок одиночной новости',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Breadcrumbs: Story = {
    render: (args) => (
        <BreadcrumbsComponent
            {...args}
        />
    ),
};
