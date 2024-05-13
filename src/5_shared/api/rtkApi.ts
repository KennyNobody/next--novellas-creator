import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rtkApi = createApi({
    reducerPath: 'appApi',
    tagTypes: [
        'post',
        'post-slider',
        'job',
        'games',
        'games-slider',
        'shop',
        'jobTax',
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
