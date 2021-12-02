import { GET_MOVIES,SUCCESS,FAILED } from "./types";

export const getMovies =  (url)=> {
    return{
        type: GET_MOVIES,
        payload: url
    } 
}

export const successFetch = (movies) => {
    return{
        type:SUCCESS,
        payload:movies
    }
}

export const failedFetch = (data) => {
    return{
        type:FAILED,
        payload:data
    }
}