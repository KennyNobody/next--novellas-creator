import { AxiosInstance } from 'axios';
import { JobFilterSchema } from '3_features/JobFilter';
import { JobListSchema } from '4_entities/Job';
import { GameListSchema } from '4_entities/Game';
import { PostListSchema } from '4_entities/Post';
import { ShopListSchema } from '4_entities/Shop';
import { PersonListSchema } from '4_entities/Person';

interface StateSchema {
    postList: PostListSchema;
    jobList: JobListSchema;
    gameList: GameListSchema;
    shopList: ShopListSchema;
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
