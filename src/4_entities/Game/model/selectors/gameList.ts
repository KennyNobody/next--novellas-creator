import { StateSchema } from '5_shared/state/StateSchema';

export const getGameListLoading = (state: StateSchema) => state?.gameList?.isListLoading;
export const getGameIntroSliderLoading = (state: StateSchema) => state?.gameList?.isIntroSliderLoading;
export const getGameListSliderLoading = (state: StateSchema) => state?.gameList?.isGamesSliderLoading;

export const getGameListPerPage = (state: StateSchema) => state?.gameList?.perPage;
export const getGameListPage = (state: StateSchema) => state?.gameList?.page;
export const getGameListCount = (state: StateSchema) => state?.gameList?.count;
export const getGameIntroSlider = (state: StateSchema) => state?.gameList?.introSlider;
export const getGameGamesSlider = (state: StateSchema) => state?.gameList?.gamesSlider;
