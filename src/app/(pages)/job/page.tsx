import { Metadata } from 'next';
import { JobPage } from '1_pages/JobPage';
import { FrontPageType } from '1_pages/FrontPage';
import { PageType } from '4_entities/Page';
import { Routes } from '5_shared/api/endpoints';
import { fetchData } from '5_shared/libs/fetching/fetchingData';
import { setPageMeta } from '5_shared/libs/helpers/setPageMeta';

const prefetchData = async () => {
    try {
        const data: PageType = await fetchData(Routes.PAGE_JOB);
        return data.data;
    } catch (error) {
        console.error('Ошибка получения данных от сервера:', error);
        return null;
    }
};

// @ts-ignore
export const metadata = async (): Promise<Metadata> => {
    const data: FrontPageType = await prefetchData();
    const metaData = data.sectionMeta;

    return setPageMeta(metaData);
};

export default async function Page() {
    const data: FrontPageType = await prefetchData();

    if (!data) {
        return <div>Ошибка получения данных от сервера</div>;
    }

    return JobPage({ data });
}
