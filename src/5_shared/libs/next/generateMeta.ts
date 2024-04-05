import { Metadata } from 'next';

const generateMeta = (data: any): Metadata => ({
    title: data.meta_title || '...',
    description: data.description || '...',
});

export {
    generateMeta,
};
