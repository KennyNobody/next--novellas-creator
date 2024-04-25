import { Metadata } from 'next';
import {
    ContactsPage,
    ContactsPageType,
} from '1_pages/ContactsPage';
import { ErrorPage } from '1_pages/ErrorPage';
import { Routes } from '5_shared/api/endpoints';
import { setPageMeta } from '5_shared/libs/helpers/setPageMeta';
import { prefetchData } from '../../model/services/fetchData';
import { PrefetchDataType } from '../../model/types/PrefetchData';
import { MainDataType } from '../../model/types/MainData';

// @ts-ignore
export const metadata = async (): Promise<Metadata> => {
    const data: PrefetchDataType | null = await prefetchData(Routes.PAGE_CONTACTS);
    const metaData = data?.pageData?.sectionMeta;

    return setPageMeta(metaData);
};

export default async function Page() {
    const response: PrefetchDataType | null = await prefetchData(Routes.PAGE_CONTACTS);

    const pageData: ContactsPageType | undefined = response?.pageData;
    const mainData: MainDataType | undefined = response?.mainData;

    if (!pageData || !mainData) {
        return <ErrorPage />;
    }

    return ContactsPage({
        pageData,
        mainData,
    });
}
