import { Metadata } from 'next';
import { prefetchData } from 'app/model/services/fetchData';
import {
    GameDetailPage,
} from '1_pages/GameDetailPage';
import { ErrorPage } from '1_pages/ErrorPage';
import { ArticleGameType } from '4_entities/Game';
import { Routes } from '5_shared/api/endpoints';
import { setPageMeta } from '5_shared/libs/helpers/setPageMeta';
import { PrefetchDataType } from '../../../model/types/PrefetchData';
import { MainDataType } from '../../../model/types/MainData';

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
    const data: PrefetchDataType | null = await prefetchData(Routes.GAMES_LIST, id);
    const metaData = data?.pageData?.sectionMeta;

    return setPageMeta(metaData);
}

export default async function Page(props: ParamsProps) {
    const id = props?.params?.id;

    const response: PrefetchDataType | null = await prefetchData(Routes.GAMES_LIST, id);

    const pageData: ArticleGameType | undefined = response?.pageData;
    const mainData: MainDataType | undefined = response?.mainData;

    if (!pageData || !mainData) {
        return <ErrorPage />;
    }

    return GameDetailPage({
        pageData,
        mainData,
    });
}
