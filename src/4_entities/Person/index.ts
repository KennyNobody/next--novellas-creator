export {
    ArticlePerson,
} from './ui/ArticlePerson/ArticlePerson';

export {
    personApi,
    useFetchPersonList,
    useLazyFetchPersonList,
} from './api/personApi';

export {
    getPersonList,
    personListReducer,
    personListActions,
} from './model/slices/personListSlice';

export {
    fetchPersonList,
} from './model/services/fetchPersonList/fetchPersonList';

export {
    initPersonList,
} from './model/services/initPersonList/initPersonList';

export {
    changePageIndex,
} from './model/services/changePageIndex/changePageIndex';

export {
    getPersonListCount,
    getPersonListLoading,
    getPersonListPage,
} from './model/selectors/personList';

export type {
    ArticlePersonType,
} from './model/types/ArticlePerson';

export type {
    PersonListSchema,
} from './model/types/PersonListSchema';
