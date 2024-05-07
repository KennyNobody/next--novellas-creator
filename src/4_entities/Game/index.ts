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
    useLazyFetchGameIntroSlider,
} from './api/gameApi';

export {
    getGameListPage,
    getGameListCount,
    getGameListPerPage,
    getGameListLoading,
    getGameListGamesSlider,
    getGameListIntroSlider,
} from './model/selectors/gameList';

export {
    initGameList,
} from './model/services/initGameList/initGameList';

export {
    DetailGame,
} from './ui/DetailGame/DetailGame';
