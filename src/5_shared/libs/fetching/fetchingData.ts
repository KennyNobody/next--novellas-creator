import { Routes } from '../../api/endpoints';

const fetchData = async (route: Routes | string) => {
    const response = await fetch(
        `https://api.novellascreator.ru/api/${route}?temp=temp42`,
        { cache: 'force-cache' },
    );

    if (!response.ok) {
        throw new Error('Ошибка получения данных');
    }

    const jsonResponse = await response.json();
    return jsonResponse.data;
};

export {
    fetchData,
};
