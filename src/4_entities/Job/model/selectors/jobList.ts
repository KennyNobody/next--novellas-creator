import { StateSchema } from '5_shared/state/StateSchema';

export const getJobListLoading = (state: StateSchema) => state?.jobList?.isLoading;
export const getJobListPerPage = (state: StateSchema) => state?.jobList?.perPage;
export const getJobListPage = (state: StateSchema) => state?.jobList?.page;
export const getJobListCount = (state: StateSchema) => state?.jobList?.count;
export const getJobListCategory = (state: StateSchema) => state?.jobList?.category;
