import { Routes } from '5_shared/api/endpoints';
import { PageType } from '4_entities/Page';
import { fetchData } from '5_shared/libs/fetching/fetchingData';
import { MainDataType } from '../types/MainData';

const prefetchData = async (pageRoute: Routes, id?: string) => {
    const url = id ? `${pageRoute}/${id}` : pageRoute;

    try {
        const mainData: MainDataType = await fetchData(Routes.MAIN);
        const pageData: PageType = await fetchData(url);
        return {
            pageData,
            mainData,
        };
    } catch (error) {
        console.error('Ошибка получения данных от сервера:', error);
        return null;
    }
};

export {
    prefetchData,
};
