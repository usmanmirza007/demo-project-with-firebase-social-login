import { all , put,call,takeLatest} from "@redux-saga/core/effects";
import { GET_MOVIES, SUCCESS, FAILED } from "./types";

export function* watcherSaga3() {
    yield takeLatest(GET_MOVIES, workerSaga);
}

async function fetchMovies(url) {
    let response = await fetch(url); 
    let json = await response.json();
    return json; 
}

function* workerSaga(action) {
    try {
        const movies = yield call(fetchMovies, action.payload)
        yield put({type:SUCCESS ,payload:movies})
    } catch (error) {
        alert(error)
        yield put({type:FAILED,payload:[]})
        

    } 
}