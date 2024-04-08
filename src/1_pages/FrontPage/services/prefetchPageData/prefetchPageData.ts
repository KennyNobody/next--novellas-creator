import { MutableRefObject } from 'react';
import { fetchPostList } from '4_entities/Post';

const prefetchPageData = async (storeRef: MutableRefObject<any>) => {
    await storeRef?.current?.dispatch(fetchPostList({}));
};

export {
    prefetchPageData,
};
