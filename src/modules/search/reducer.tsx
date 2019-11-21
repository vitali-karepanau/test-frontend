import { SearchAction } from './actions';
import {
    SEARCH_FAILURE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
} from './constants';

export interface Issue {
    _id: string;
    symptom: string;
    solutions: Array<string>;
}

export interface SearchState {
    loading: boolean;
    success: boolean;
    data: Array<Issue>;
    total: number;
    error: boolean;
}

const initialState: SearchState = {
    loading: false,
    success: false,
    data: [],
    total: 0,
    error: false,
};

export const searchReducer = (state: SearchState = initialState, action: SearchAction) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                data: action.data,
                total: action.total,
                loading: false,
                success: true,
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};
