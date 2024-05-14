import { Metadata } from 'next';
import {
    ShopPage,
    ShopPageType,
} from '1_pages/ShopPage';
import { ErrorPage } from '1_pages/ErrorPage';
import { Routes } from '5_shared/api/endpoints';
import { setPageMeta } from '5_shared/libs/helpers/setPageMeta';
import { PrefetchDataType } from '../../model/types/PrefetchData';
import { prefetchData } from '../../model/services/fetchData';
import { MainDataType } from '../../model/types/MainData';

// @ts-ignore
export const metadata = async (): Promise<Metadata> => {
    const data: PrefetchDataType | null = await prefetchData(Routes.PAGE_SHOP);
    const metaData = data?.pageData?.sectionMeta;

    return setPageMeta(metaData);
};

export default async function Page() {
    const response: PrefetchDataType | null = await prefetchData(Routes.PAGE_SHOP);

    const pageData: ShopPageType | undefined = response?.pageData;
    const mainData: MainDataType | undefined = response?.mainData;

    if (!pageData || !mainData) {
        return <ErrorPage />;
    }

    return ShopPage({
        // pageData,
        mainData,
    });
}
