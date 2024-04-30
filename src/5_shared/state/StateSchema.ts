import { AxiosInstance } from 'axios';
import { JobListSchema } from '4_entities/Job';
import { PostListSchema } from '4_entities/Post';

interface StateSchema {
    postList: PostListSchema;
    jobList: JobListSchema;
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
