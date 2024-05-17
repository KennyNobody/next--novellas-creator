import { Metadata } from 'next';
import { ErrorPage } from '1_pages/ErrorPage';
import { NotFoundPage } from '1_pages/NotFoundPage';
import { Routes } from '5_shared/api/endpoints';
import { setPageMeta } from '5_shared/libs/helpers/setPageMeta';
import { prefetchData } from './model/services/fetchData';
import { PrefetchDataType } from './model/types/PrefetchData';
import { MainDataType } from './model/types/MainData';

// @ts-ignore
export const metadata = async (): Promise<Metadata> => {
    const data: PrefetchDataType | null = await prefetchData(Routes.PAGE_CONTACTS);
    const metaData = data?.pageData?.sectionMeta;

    return setPageMeta(metaData);
};

export default async function NotFound() {
    const response: PrefetchDataType | null = await prefetchData(Routes.PAGE_CONTACTS);
    const mainData: MainDataType | undefined = response?.mainData;

    if (!mainData) {
        return <ErrorPage />;
    }

    return NotFoundPage({
        mainData,
    });
}
