import axios from 'axios'

export const ProductsAction= () => {

         return async  (dispatch)=>{
               const data = await axios.get("http://localhost:5000/posts");
            
           console.log(data.data)
          dispatch({type:"GET_DATA",payload:data.data})
          
     }
}


export const deleteProductsAction= (id) => {

     return async  (dispatch)=>{
           await axios.delete(`http://localhost:5000/posts/${id}`);
          
          console.log(id)
      dispatch({type:"DELETE__DATA",payload:id})
      
 }
}

