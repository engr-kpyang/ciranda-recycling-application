import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCompanies(action) {
    try {
        const searchCompanies = yield axios.get(`/api/location/${action.payload}`);
        console.log('Inside fetchCompanies, data is:', searchCompanies.data);
        // yield put({ type: 'SET_COMPANIES', payload: searchCompanies.data});
    } catch (error) {
        console.log('Inside fetchCompanies, unable to return comapnies', error);
    }
}


function* userSearchSaga() {
    yield takeLatest('FETCH_COMPANIES', fetchCompanies);
}

export default userSearchSaga;