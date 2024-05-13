import { StateSchema } from '5_shared/state/StateSchema';

export const getGameListLoading = (state: StateSchema) => state?.gameList?.isListLoading;
export const getGameSliderLoading = (state: StateSchema) => state?.gameList?.isSliderLoading;

export const getGameListPerPage = (state: StateSchema) => state?.gameList?.perPage;
export const getGameListPage = (state: StateSchema) => state?.gameList?.page;
export const getGameListCount = (state: StateSchema) => state?.gameList?.count;
export const getGameSlider = (state: StateSchema) => state?.gameList?.slider;
