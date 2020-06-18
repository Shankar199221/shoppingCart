
const initialState = {
    data:[]
}

function ProductsReducer(state=initialState,action) {
    if(action.type === "GET_DATA"){
        return {
            ...state,
            data:action.payload
           
        }
    }
    if(action.type === "DELETE_DATA"){
        return{
            ...state,
          data:state.data.filter( data => data.p_id !== action.payload)
        }
    }
    if(action.type === "EDIT_DATA"){
        return{
            ...state,
          data:state.data.map( data => data.p_id === action.payload.p_id ?  action.payload:data)
        }
    }
   
    return state
}

export default ProductsReducer
