import { StateSchema } from '5_shared/state/StateSchema';

export const getGameListLoading = (state: StateSchema) => state?.gameList?.isLoading;
export const getGameListPerPage = (state: StateSchema) => state?.gameList?.perPage;
export const getGameListPage = (state: StateSchema) => state?.gameList?.page;
export const getGameListCount = (state: StateSchema) => state?.gameList?.count;
export const getGameListIntroSlider = (state: StateSchema) => state?.gameList?.introSlider;
export const getGameListGamesSlider = (state: StateSchema) => state?.gameList?.gamesSlider;
