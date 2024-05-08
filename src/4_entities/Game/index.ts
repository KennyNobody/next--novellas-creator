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
    useLazyFetchGameListSlider,
    useLazyFetchGameIntroSlider,
} from './api/gameApi';

export {
    getGameListPage,
    getGameListCount,
    getGameListPerPage,
    getGameListLoading,
    getGameGamesSlider,
    getGameIntroSlider,
} from './model/selectors/gameList';

export {
    initGameList,
} from './model/services/initGameList/initGameList';

export {
    fetchGameIntroSlider,
} from './model/services/fetchGameIntroSlider/fetchGameIntroSlider';

export {
    fetchGameListSlider,
} from './model/services/fetchGameListSlider/fetchGameListSlider';

export {
    DetailGame,
} from './ui/DetailGame/DetailGame';
