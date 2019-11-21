import { call, put } from 'redux-saga/effects';
import {
    METHOD_GET,
    requestBuilder,
} from '../../../helpers';
import {
    searchFailure,
    SearchRequest,
    searchSuccess,
} from '../actions';

export default function* SearchRequestSaga(action: SearchRequest) {
    try {
        const data = yield call(
            requestBuilder,
            '/issues',
            METHOD_GET,
            {
                query: action.query,
                page: action.page,
            }
        );
        
        yield put(
            searchSuccess(
                data.data.hits.map(
                    (item: any) => ({
                        _id: item._id,
                        ...item._source
                    })
                ),
                data.data.total.value
            )
        );
    } catch (error) {
        yield put(searchFailure());
    }
}
