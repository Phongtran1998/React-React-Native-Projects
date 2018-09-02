import _ from 'lodash';
import {REHYDRATE} from 'redux-persist/constants'
import {CLEAR_LIKE_JOBS, LIKE_JOB} from "../actions/types";

export default function (state = [], action) {

    switch (action.type) {
        case REHYDRATE:
            return action.payload.like || [];
        case LIKE_JOB:
            return _.uniqBy([
                action.payload, ...state
            ], 'id');
        case CLEAR_LIKE_JOBS:
            return [];
        default:
            return state;
    }
}