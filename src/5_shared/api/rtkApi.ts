import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rtkApi = createApi({
    reducerPath: 'appApi',
    tagTypes: [
        'post',
        'job',
        'games',
        'games-intro',
        'games-list',
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
