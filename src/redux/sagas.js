import {all} from 'redux-saga/effects';
import { watcherSaga3} from "./productDetails/saga"
export default function* root() {
  yield all([
      watcherSaga3()
    ]);
}
