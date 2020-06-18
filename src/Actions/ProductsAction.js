import axios from 'axios'


export const ProductsAction= () => {

         return async  (dispatch)=>{
               const data = await axios.get("http://localhost:5000/posts");
            
          //  console.log(data.data)
          dispatch({type:"GET_DATA",payload:data.data})
          
     }
}


export const deleteProductsAction= (id) => {
   
     return  (dispatch)=>{
        
               dispatch({type:"DELETE_DATA",payload:id})
     //    console.log(id)
 }
}

export const editProductsAction= (data) => {
   
     return   (dispatch)=>{
         
               dispatch({type:"EDIT_DATA",payload:data})
     console.log(data)
 }
}

