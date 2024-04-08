'use client';

import { Provider } from 'react-redux';
import { ReactNode, useRef } from 'react';
import { makeStore, AppStore } from './state';
import { prefetchData, PrefetchKey } from './prefetchData';

interface StoreProviderProps {
    slug: PrefetchKey;
    children: ReactNode;
}

export default async function StoreProvider(props: StoreProviderProps) {
    const { slug, children } = props;
    const storeRef = useRef<AppStore>();

    if (!storeRef.current) {
        storeRef.current = makeStore();
        await prefetchData(slug, storeRef);
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
