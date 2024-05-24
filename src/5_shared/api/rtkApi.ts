import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rtkApi = createApi({
    reducerPath: 'appApi',
    tagTypes: [
        'post',
        'post-slider',
        'job',
        'games',
        'games-slider',
        'games-area',
        'shop',
        'jobTax',
        'teamTax',
        'person',
    ],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://api.novellascreator.ru/api/',
        },
    ),
    endpoints: () => ({}),
});

export {
    rtkApi,
};
