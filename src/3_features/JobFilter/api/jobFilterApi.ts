import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { JobFilterTag } from '../model/types/JobFilter';

const taxEnum: Record<JobFilterTag, Routes> = {
    [JobFilterTag.TYPE]: Routes.JOB_TAX_TYPE,
    [JobFilterTag.PRODUCT]: Routes.JOB_TAX_PRODUCT,
    [JobFilterTag.LOCATION]: Routes.JOB_TAX_LOCATION,
    [JobFilterTag.DEPARTMENT]: Routes.JOB_TAX_DEPARTMENT,
};

const jobFilterApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchJobTax: build.query({
            query: (tag: JobFilterTag | '') => ({
                url: tag ? taxEnum[tag] : '',
                params: {},
            }),
            providesTags: ['jobTax'],
        }),
    }),
    overrideExisting: false,
});

const useLazyFetchJobTax = jobFilterApi.useLazyFetchJobTaxQuery;

export {
    jobFilterApi,
    useLazyFetchJobTax,
};
