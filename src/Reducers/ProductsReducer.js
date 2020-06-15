
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
    if(action.type === "DELETE__DATA"){
        return{
            ...state,
          data:state.data.filter( data => data.id !== action.payload)
        }
    }
   
    return state
}

export default ProductsReducer
