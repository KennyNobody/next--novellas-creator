import { StateSchema } from '5_shared/state/StateSchema';

export const getJobFilterLoading = (state: StateSchema) => state?.jobFilter?.isLoading;
export const getJobFilterErrors = (state: StateSchema) => state?.jobFilter?.errors;

export const getJobFilterType = (state: StateSchema) => state?.jobFilter?.type;
export const getJobFilterProduct = (state: StateSchema) => state?.jobFilter?.product;
export const getJobFilterLocation = (state: StateSchema) => state?.jobFilter?.location;
export const getJobFilterDepartment = (state: StateSchema) => state?.jobFilter?.department;
export const getJobFilterSelected = (state: StateSchema) => state?.jobFilter?.selected;
