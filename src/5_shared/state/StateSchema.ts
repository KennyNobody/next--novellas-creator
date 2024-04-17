import { AxiosInstance } from 'axios';
import { PostListSchema } from '4_entities/Post';

interface StateSchema {
    postList: PostListSchema,
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
