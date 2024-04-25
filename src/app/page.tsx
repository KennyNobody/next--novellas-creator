import { Metadata } from 'next';
import { ErrorPage } from '1_pages/ErrorPage';
import { FrontPage, FrontPageType } from '1_pages/FrontPage';
import { Routes } from '5_shared/api/endpoints';
import { setPageMeta } from '5_shared/libs/helpers/setPageMeta';
import { MainDataType } from './model/types/MainData';
import { prefetchData } from './model/services/fetchData';
import { PrefetchDataType } from './model/types/PrefetchData';

// @ts-ignore
export const metadata = async (): Promise<Metadata> => {
    const data: PrefetchDataType | null = await prefetchData(Routes.PAGE_FRONT);
    const metaData = data?.pageData?.sectionMeta;

    return setPageMeta(metaData);
};

export default async function Page() {
    const response: PrefetchDataType | null = await prefetchData(Routes.PAGE_FRONT);

    const pageData: FrontPageType | undefined = response?.pageData;
    const mainData: MainDataType | undefined = response?.mainData;

    if (!pageData || !mainData) {
        return <ErrorPage />;
    }

    return FrontPage({
        pageData,
        mainData,
    });
}
