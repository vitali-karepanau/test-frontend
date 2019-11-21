import { AppState } from '../';
import { Issue } from '.';

export const selectSearchLoading = (state: AppState): boolean => state.search.loading;
export const selectSearchSuccess = (state: AppState): boolean => state.search.success;
export const selectSearchFailure = (state: AppState): boolean => state.search.error;
export const selectSearchData = (state: AppState): Array<Issue> => state.search.data;
export const selectSearchTotal = (state: AppState): number => state.search.total;
