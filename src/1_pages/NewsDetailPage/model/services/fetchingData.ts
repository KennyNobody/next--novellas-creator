
const fetchData = async (id: string) => {
    const response = await fetch(
        `https://api.novellascreator.ru/api/collections/news/entries/${id}`,
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