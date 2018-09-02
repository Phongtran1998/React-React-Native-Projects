import axios from 'axios';
import reverseGeocode from 'latlng-to-zip'
import qs from 'qs'
import {FETCH_JOBS, JOB_SEARCH, LIKE_JOB, CLEAR_LIKE_JOBS} from "./types";

const GITHUB_BASE_URL = 'https://jobs.github.com/positions.json?';

export const fetchJobs = ({longitudeDelta, latitudeDelta, longitude, latitude}, search, callback) => {

    return async (dispatch) => {
        try {
            const url = `${GITHUB_BASE_URL}description=${search}&lat=${latitude}&long=${longitude}`;

            let {data} = await axios.get(url);
            dispatch({
                type: FETCH_JOBS,
                payload: data
            });
            callback();



        } catch (err) {
            console.log("Something went wrong... ", err);
        }
    }
};



export const jobSearch = text => {
    return {
        type: JOB_SEARCH,
        payload: text
    }
};

export const likeJob = (job) => {
    return {
        payload: job,
        type: LIKE_JOB
    }
};
export const clearLikedJobs = () => {
    return {type: CLEAR_LIKE_JOBS}
};