import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { TaxType } from '4_entities/Tax';

export interface JobFilterSchema {
    type: TaxType[];
    product: TaxType[];
    location: TaxType[];
    department?: TaxType[];
    selected: TaxType[];
    isLoading?: boolean;
    errors: FetchBaseQueryError | undefined;
}
