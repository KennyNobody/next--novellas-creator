import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '5_shared/state/StateSchema';
import { personApi } from '../../api/personApi';
import { ArticlePersonType } from '../types/ArticlePerson';
import { PersonListSchema } from '../types/PersonListSchema';

const personListAdapter = createEntityAdapter<ArticlePersonType>();
personListAdapter.selectId = (item: ArticlePersonType) => item.id;

export const getPersonList = personListAdapter.getSelectors<StateSchema>(
    (state) => state.personList || personListAdapter.getInitialState(),
);

const initialState: PersonListSchema = {
    page: 1,
    perPage: 3,
    isLoading: false,
    errors: undefined,
    count: 1,
    ids: [],
    entities: {},
};

const personListSlice = createSlice({
    name: 'personListSlice',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<ArticlePersonType[]>) => {
            personListAdapter.setMany(state, action.payload);
        },
        setPagination: (state, action) => {
            const pagination = action.payload;
            state.page = pagination.current_page;
            state.count = pagination.last_page;
            state.perPage = pagination.per_page;
        },
    },
    extraReducers: (builder) => {
        const request = personApi.endpoints.fetchPersonList;

        builder
            .addMatcher(request.matchPending, (state) => {
                personListAdapter.removeAll(state);

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
    reducer: personListReducer,
    actions: personListActions,
} = personListSlice;
