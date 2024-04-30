export {
    GridJob,
} from './ui/GridJob/GridJob';

export {
    DetailJob,
} from './ui/DetailJob/DetailJob';

export {
    ArticleJob,
} from './ui/ArticleJob/ArticleJob';

export {
    jobApi,
    useLazyFetchJobList,
} from './api/jobApi';

export {
    getJobList,
    jobListReducer,
    jobListActions,
} from './model/slices/jobListSlice';

export {
    fetchJobList,
} from './model/services/fetchJobList/fetchJobList';

export {
    initJobList,
} from './model/services/initJobList/initJobList';

export {
    changePageIndex,
} from './model/services/changePageIndex/changePageIndex';

export {
    getJobListCount,
    getJobListLoading,
    getJobListPage,
    getJobListCategory,
} from './model/selectors/jobList';

export {
    type ArticleJobType,
} from './model/types/ArticleJob';

export type {
    JobListSchema,
} from './model/types/JobListSchema';
