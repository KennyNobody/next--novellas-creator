const enum RouteSlug {
    FRONT,
    JOB,
    NEWS,
    SHOP,
    ABOUT,
    GAMES,
    CONTACTS,
}

interface RouteDataType {
    url: string,
    caption: string;
}

const RoutesList: Record<RouteSlug, RouteDataType> = {
    [RouteSlug.FRONT]: {
        url: '/',
        caption: 'Главная',
    },
    [RouteSlug.JOB]: {
        url: '/job/',
        caption: 'Вакансии',
    },
    [RouteSlug.NEWS]: {
        url: '/news/',
        caption: 'Новости',
    },
    [RouteSlug.SHOP]: {
        url: '/shop/',
        caption: 'Магазин',
    },
    [RouteSlug.ABOUT]: {
        url: '/about/',
        caption: 'О нас',
    },
    [RouteSlug.GAMES]: {
        url: '/games/',
        caption: 'Игры',
    },
    [RouteSlug.CONTACTS]: {
        url: '/contacts/',
        caption: 'Контакты',
    },
};

export {
    RouteSlug,
    RoutesList,
};
