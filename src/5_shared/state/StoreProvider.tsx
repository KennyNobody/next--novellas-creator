'use client';

import { Provider } from 'react-redux';
import { MutableRefObject, ReactNode, useRef } from 'react';
import { fetchPostList } from '4_entities/Post/model/services/fetchPostList/fetchPostList';
import { makeStore, AppStore } from './state';

interface StoreProviderProps {
    children: ReactNode;
}

const getPrefetchData = async (storeRef: MutableRefObject<any>) => {
    await storeRef.current?.dispatch(fetchPostList({}));
};

export default async function StoreProvider({ children }: StoreProviderProps) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
        await getPrefetchData(storeRef);
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
