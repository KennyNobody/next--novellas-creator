import { Metadata } from 'next';
import {
    fetchData,
    NewsDetailPage,
    NewsDetailPageType,
} from '1_pages/NewsDetailPage';
import { setPageMeta } from '5_shared/libs/helpers/setPageMeta';

const prefetchData = async (id: string) => {
    try {
        const data: NewsDetailPageType = await fetchData(id);
        // @ts-ignore
        return data.data;
    } catch (error) {
        console.error('Ошибка получения данных от сервера:', error);
        return null;
    }
};

interface ParamsProps {
    params: {
        id: string;
    }
}

export async function generateMetadata(
    { params }:
    ParamsProps,
    // parent: ResolvingMetadata,
): Promise<Metadata> {
    const { id } = params;
    const data: NewsDetailPageType = await prefetchData(id);
    const metaData = data.sectionMeta;

    return setPageMeta(metaData);
}

export default async function Page(props: ParamsProps) {
    const id = props?.params?.id;

    const data: NewsDetailPageType | null = await prefetchData(id);

    if (!data) {
        return <div>Ошибка получения данных от сервера</div>;
    }

    return <NewsDetailPage data={data} />;
}
