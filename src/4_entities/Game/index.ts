export type {
    ArticleGameType,
    GamePreviewSlideType,
} from './model/types/ArticleGame';

export type {
    GameListSchema,
} from './model/types/GameListSchema';

export {
    getGameList,
    gameListActions,
    gameListReducer,
} from './model/slices/gameSlice';

export {
    useLazyFetchGameList,
    useLazyFetchGameSlider,
} from './api/gameApi';

export {
    getGameSlider,
    getGameListPage,
    getGameListCount,
    getGameListPerPage,
    getGameListLoading,
} from './model/selectors/gameList';

export {
    initGameList,
} from './model/services/initGameList/initGameList';

export {
    fetchGameSlider,
} from './model/services/fetchGameSlider/fetchGameSlider';

export {
    DetailGame,
} from './ui/DetailGame/DetailGame';

export {
    changePageIndex,
} from './model/services/changePageIndex/changePageIndex';

export {
    ArticleGame,
} from './ui/ArticleGame/ArticleGame';
