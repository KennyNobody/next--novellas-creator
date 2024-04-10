import { Routes } from '../../api/endpoints';

const fetchData = async () => {
    const response = await fetch(
        `https://api.novellascreator.ru/api/${Routes.PAGE_FRONT}`,
        { cache: 'force-cache' },
    );

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
};

export {
    fetchData,
};
