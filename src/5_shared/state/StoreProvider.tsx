'use client';

import { Provider } from 'react-redux';
import { ReactNode, useRef } from 'react';
import { postListActions } from '4_entities/Post';
import { makeStore, AppStore } from './state';
import { fetchPostList } from '4_entities/Post/model/services/fetchPostList/fetchPostList';

interface StoreProviderProps {
    children: ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
        storeRef.current?.dispatch(postListActions.setTempName('Проинициализировано'));

        storeRef.current?.dispatch(fetchPostList({}));
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
