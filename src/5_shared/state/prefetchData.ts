import { MutableRefObject } from 'react';
import { prefetchPageData } from '1_pages/FrontPage';

type PrefetchFunction = (storeRef: MutableRefObject<any>) => Promise<any>;

enum PrefetchKey {
    FRONT = 'front',
    GAMES = 'games',
    NEWS = 'news',
    SHOP = 'shop',
    ABOUT = 'about',
    JOB = 'job',
    CONTACTS = 'contacts',
}

// @ts-ignore
const prefetchElements: Record<PrefetchKey, PrefetchFunction> = {
    [PrefetchKey.FRONT]: prefetchPageData,
};

const prefetchData = async (slug: PrefetchKey, storeRef: MutableRefObject<any>) => {
    const method = prefetchElements[slug];
    if (method) await method(storeRef);
};

export {
    PrefetchKey,
    prefetchData,
};
