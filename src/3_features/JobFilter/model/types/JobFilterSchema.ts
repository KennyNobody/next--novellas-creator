import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { TaxType } from '4_entities/Tax';
import { JobFilterTag } from './JobFilter';

export interface JobFilterSchema {
    [JobFilterTag.TYPE]: TaxType[];
    [JobFilterTag.PRODUCT]: TaxType[];
    [JobFilterTag.LOCATION]: TaxType[];
    [JobFilterTag.DEPARTMENT]: TaxType[];
    selected: TaxType[];
    isLoading?: boolean;
    errors: FetchBaseQueryError | undefined;
}
