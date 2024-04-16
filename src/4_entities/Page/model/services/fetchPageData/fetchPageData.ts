const fetchPageData = async (slug: string) => {
    const response = await fetch(
        `https://api.novellascreator.ru/api/collections/pages/entries/${slug}`,
        { cache: 'force-cache' },
    );
    return response.json();
};

export {
    fetchPageData,
};
