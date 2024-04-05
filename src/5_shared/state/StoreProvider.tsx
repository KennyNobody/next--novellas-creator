'use client';

import { Provider } from 'react-redux';
import { ReactNode, useRef } from 'react';
import { makeStore, AppStore } from './state';

interface StoreProviderProps {
    children: ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
