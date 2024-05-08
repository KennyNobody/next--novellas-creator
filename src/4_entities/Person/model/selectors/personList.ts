import { StateSchema } from '5_shared/state/StateSchema';

export const getPersonListLoading = (state: StateSchema) => state?.personList?.isLoading;
export const getPersonListPerPage = (state: StateSchema) => state?.personList?.perPage;
export const getPersonListPage = (state: StateSchema) => state?.personList?.page;
export const getPersonListCount = (state: StateSchema) => state?.personList?.count;
