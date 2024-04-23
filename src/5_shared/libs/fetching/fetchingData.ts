import { Routes } from '../../api/endpoints';

const fetchData = async (route: Routes) => {
    const response = await fetch(
        `https://api.novellascreator.ru/api/${route}?temp=temp2`,
        { cache: 'force-cache' },
    );

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const jsonResponse = await response.json();
    return jsonResponse.data;
};

export {
    fetchData,
};
