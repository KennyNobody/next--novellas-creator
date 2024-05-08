import { AxiosInstance } from 'axios';
import { JobFilterSchema } from '3_features/JobFilter';
import { JobListSchema } from '4_entities/Job';
import { PostListSchema } from '4_entities/Post';
import { GameListSchema } from '4_entities/Game';
import { PersonListSchema } from '4_entities/Person';

interface StateSchema {
    postList: PostListSchema;
    jobList: JobListSchema;
    gameList: GameListSchema;
    personList: PersonListSchema;
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
