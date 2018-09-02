import {JOB_SEARCH, FETCH_JOBS, LIKE_JOB} from "../actions/types";

const INITIAL_STATE = {job: '', result: []};
export default function (state = INITIAL_STATE, action) {

    switch (action.type){
        case JOB_SEARCH:
            return {...state, job: action.payload};
        case FETCH_JOBS:
            return {...state, result: action.payload};

        default:
            return state;
    }
}