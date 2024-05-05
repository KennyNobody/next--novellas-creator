import { AxiosInstance } from 'axios';
import { JobListSchema } from '4_entities/Job';
import { PostListSchema } from '4_entities/Post';
import { JobFilterSchema } from '3_features/JobFilter';

interface StateSchema {
    postList: PostListSchema;
    jobList: JobListSchema;
    jobFilter: JobFilterSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}

export type {
    ThunkConfig,
    StateSchema,
};
