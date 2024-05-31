'use client';

import { ReactNode } from 'react';

interface ClientWrapperProps {
    children: ReactNode;
}

export const ClientWrapper = (props: ClientWrapperProps) => {
    const { children } = props;

    return children;
};
