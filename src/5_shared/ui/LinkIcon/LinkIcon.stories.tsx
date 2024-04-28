import type {Meta, StoryObj} from '@storybook/react';
import { IconKey, LinkIcon as LinkIconComponent } from './LinkIcon';

const meta: Meta<typeof LinkIconComponent> = {
    title: 'Shared/LinkIcon',
    component: LinkIconComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        href: '#',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkIcon: Story = {
    render: (args) => (
        <LinkIconComponent
            href="#"
            iconKey={IconKey.SEARCH}
        />
    ),
};
