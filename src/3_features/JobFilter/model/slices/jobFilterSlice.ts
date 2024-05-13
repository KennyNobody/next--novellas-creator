import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { TaxSimpleType, TaxType } from '4_entities/Tax';
import { jobFilterApi } from '../../api/jobFilterApi';
import { JobFilterSchema } from '../types/JobFilterSchema';
import { JobFilterTag } from '../types/JobFilter';

interface SetResultType {
    tag: JobFilterTag;
    data: TaxType[];
}

const initialState: JobFilterSchema = {
    [JobFilterTag.TYPE]: [],
    [JobFilterTag.PRODUCT]: [],
    [JobFilterTag.LOCATION]: [],
    [JobFilterTag.DEPARTMENT]: [],
    selected: [],
    isLoading: false,
    errors: undefined,
};

const jobFilterSlice = createSlice({
    name: 'jobFilterSlice',
    initialState,
    reducers: {
        setResultArray: (state, action: PayloadAction<SetResultType>) => {
            const {
                tag,
                data,
            } = action.payload;

            state[tag] = data;
        },
        setSelectedParams: (state, action: PayloadAction<TaxSimpleType>) => {
            const taxKey = action.payload.key as JobFilterTag;
            const item = state[taxKey].find((el: TaxType) => el.slug === action.payload.slug);

            const itSelected = state?.selected.some((el: TaxType) => el.slug === item?.slug);

            if (item && !itSelected) {
                state?.selected?.push(item);
            }
        },
        removeSelectedEl: (state, action: PayloadAction<TaxType>) => {
            const index = state.selected.findIndex((el: TaxType) => el.slug === action.payload.slug);
            if (index !== -1) state.selected.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        const request = jobFilterApi.endpoints.fetchJobTax;

        builder
            .addMatcher(request.matchPending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addMatcher(request.matchFulfilled, (state) => {
                state.isLoading = false;
            })
            .addMatcher(request.matchRejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: jobFilterReducer,
    actions: jobFilterActions,
} = jobFilterSlice;
