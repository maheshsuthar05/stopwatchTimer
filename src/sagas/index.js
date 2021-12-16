import {put, takeEvery} from 'redux-saga/effects';

export function* updateTimerSaga(action){
    yield put({type:'UPDATE_TIMER', payload : action.payload})
}

export function* watchSaga(){
    yield takeEvery('UPDATE_TIMER_SAGA', updateTimerSaga)
}