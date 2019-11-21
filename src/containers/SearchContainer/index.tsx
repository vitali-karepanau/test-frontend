import React, { useState } from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import { SearchComponent } from '../../components';
import {
    selectSearchLoading,
    selectSearchSuccess,
    selectSearchData,
    searchRequest,
    selectSearchTotal,
} from '../../modules';

export const SearchContainer = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectSearchLoading);
    const success = useSelector(selectSearchSuccess);
    const data = useSelector(selectSearchData);
    const total = useSelector(selectSearchTotal);
    const [value, setValue] = useState<string>('');

    const handleSubmit = (query: string, page: number = 1) => {
        console.log(query);
        dispatch(searchRequest(query, page));
    };

    return (
        <SearchComponent
            loading={loading}
            onChange={setValue}
            value={value}
            onSubmit={handleSubmit}
            data={data}
            found={success}
            pages={total}
        />
    );
};
