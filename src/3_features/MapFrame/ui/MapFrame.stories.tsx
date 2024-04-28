import type { Meta, StoryObj } from '@storybook/react';
import { MapFrame as MapFrameComponent } from './MapFrame';

const meta: Meta<typeof MapFrameComponent> = {
    title: 'Features/MapFrame',
    component: MapFrameComponent,
    // tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        data: '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A88d44700f83dcd6e75d21aff74a0a9844c8f9a633e6ec8630b3b4f70c736d03f&amp;lang=ru_RU&amp;scroll=true"></script>',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MapFrame: Story = {
    render: (args) => (
        <div style={{
            height: '50vh',
            display: 'block',
        }}
        >
            <MapFrameComponent
                {...args}
            />
        </div>

    ),
};
