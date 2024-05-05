import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '5_shared/state/StateSchema';
import { jobApi } from '../../api/jobApi';
import { JobListSchema } from '../types/JobListSchema';
import { ArticleJobType } from '../types/ArticleJob';

const jobListAdapter = createEntityAdapter<ArticleJobType>();
jobListAdapter.selectId = (item: ArticleJobType) => item.id;

export const getJobList = jobListAdapter.getSelectors<StateSchema>(
    (state) => state.jobList || jobListAdapter.getInitialState(),
);

const initialState: JobListSchema = {
    page: 1,
    perPage: 3,
    isLoading: false,
    errors: undefined,
    category: undefined,
    count: 1,
    ids: [],
    entities: {},
};

const jobListSlice = createSlice({
    name: 'jobListSlice',
    initialState,
    reducers: {
        replaceData: (state, action: PayloadAction<ArticleJobType[]>) => {
            jobListAdapter.setAll(state, action.payload);
        },
        setPagination: (state, action) => {
            const pagination = action.payload;
            state.page = pagination.current_page;
            state.count = pagination.last_page;
            state.perPage = pagination.per_page;
        },
        resetState: (state) => {
            jobListAdapter.removeAll(state);
            Object.assign(state, initialState);
        },
    },
    extraReducers: (builder) => {
        const request = jobApi.endpoints.fetchJobList;

        builder
            .addMatcher(request.matchPending, (state) => {
                jobListAdapter.removeAll(state);

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
    reducer: jobListReducer,
    actions: jobListActions,
} = jobListSlice;
