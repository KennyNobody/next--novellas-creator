import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rtkApi = createApi({
    reducerPath: 'appApi',
    tagTypes: [
        'post',
        'job',
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
