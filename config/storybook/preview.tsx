import type { Preview } from '@storybook/react';
import { StyleDecorator } from '5_shared/libs/decorators/StyleDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => <StyleDecorator><Story /></StyleDecorator>,
    ],
};

export default preview;
