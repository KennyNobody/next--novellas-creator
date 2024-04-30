import type { Meta, StoryObj } from '@storybook/react';
import { Pagination as PaginationComponent } from './Pagination';
import {
    dataEnd,
    dataShort,
    dataStart,
    dataCenter,
} from '../model/mocks/data';

const meta: Meta<typeof PaginationComponent> = {
    title: 'Features/Pagination',
    component: PaginationComponent,
    parameters: {
        layout: 'fullscreen',
    },
};

type Story = StoryObj<typeof PaginationComponent>;

export default meta;

export const StartPosition: Story = {
    args: dataStart,
};

export const MiddlePosition: Story = {
    args: dataCenter,
};

export const EndPosition: Story = {
    args: dataEnd,
};

export const ShortPosition: Story = {
    args: dataShort,
};
