import { Metadata } from 'next';

const setPageMeta = (data: Metadata) => ({
    title: data?.title || 'Загрузка',
    description: data?.description || '...',
});

export {
    setPageMeta,
};
