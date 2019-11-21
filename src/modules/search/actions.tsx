import {
    SEARCH_FAILURE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
} from './constants';
import {
    Issue,
} from './reducer';


export interface SearchRequest {
    type: typeof SEARCH_REQUEST;
    query: string;
    page: number;
}

export interface SearchSuccess {
    type: typeof SEARCH_SUCCESS;
    data: Array<Issue>;
    total: number;
}

export interface SearchFailure {
    type: typeof SEARCH_FAILURE;
}

export type SearchAction = SearchSuccess | SearchFailure | SearchRequest;

export const searchRequest = (query: string, page: number): SearchRequest => ({
    type: SEARCH_REQUEST,
    query,
    page,
});

export const searchSuccess = (data: Array<Issue>, total: number): SearchSuccess => ({
    type: SEARCH_SUCCESS,
    data,
    total,
});

export const searchFailure = (): SearchFailure => ({
    type: SEARCH_FAILURE,
});
