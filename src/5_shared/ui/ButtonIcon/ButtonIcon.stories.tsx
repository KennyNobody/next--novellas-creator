import type {Meta, StoryObj} from '@storybook/react';
import {ButtonIcon as LinkIconComponent, IconKey} from './ButtonIcon';

const meta: Meta<typeof LinkIconComponent> = {
    title: 'Shared/LinkIcon',
    component: LinkIconComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    // args: {
    //     iconKey: IconKey.MENU,
    //     clickEvent: () => console.log('It,s work!'),
    // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkIcon: Story = {
    render: () => (
        <LinkIconComponent
            iconKey={IconKey.BACK}
            clickEvent={() => console.log('It,s work!')}
        />
    ),
};
