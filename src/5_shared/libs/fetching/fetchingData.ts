import { Routes } from '../../api/endpoints';

const fetchData = async (route: Routes) => {
    const response = await fetch(
        `https://api.novellascreator.ru/api/${route}?data=${Date.now()}`,
        // { cache: 'force-cache' },
    );

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
};

export {
    fetchData,
};
