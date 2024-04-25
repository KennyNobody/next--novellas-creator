import { Metadata } from 'next';
import {
    AboutPage,
    AboutPageType,
} from '1_pages/AboutPage';
import { ErrorPage } from '1_pages/ErrorPage';
import { Routes } from '5_shared/api/endpoints';
import { setPageMeta } from '5_shared/libs/helpers/setPageMeta';
import { PrefetchDataType } from '../../model/types/PrefetchData';
import { prefetchData } from '../../model/services/fetchData';
import { MainDataType } from '../../model/types/MainData';

// @ts-ignore
export const metadata = async (): Promise<Metadata> => {
    const data: PrefetchDataType | null = await prefetchData(Routes.PAGE_ABOUT);
    const metaData = data?.pageData?.sectionMeta;

    return setPageMeta(metaData);
};

export default async function Page() {
    const response: PrefetchDataType | null = await prefetchData(Routes.PAGE_ABOUT);

    const pageData: AboutPageType | undefined = response?.pageData;
    const mainData: MainDataType | undefined = response?.mainData;

    if (!pageData || !mainData) {
        return <ErrorPage />;
    }

    return AboutPage({
        pageData,
        mainData,
    });
}
