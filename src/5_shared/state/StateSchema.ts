import { AxiosInstance } from 'axios';
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
