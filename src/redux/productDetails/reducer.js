import { GET_MOVIES,SUCCESS,FAILED} from "./types";

const initialState = {
    isLoading:false,
    movies: []
}

const Mreducer = (state = initialState , action) =>{
    switch(action.type){
        case GET_MOVIES:
            return{
                ...state,
                isLoading:true
            }
        case SUCCESS:
            return{
                ...state ,
                 movies : action.payload ,
                 isLoading:false

            }
        case FAILED:
            return{
                ...state,
                movies:action.payload
            }
        default:
            return state
    }
}
export default Mreducer