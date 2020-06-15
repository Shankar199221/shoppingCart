/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {ProductsAction} from '../../Actions/ProductsAction'
import {deleteProductsAction} from '../../Actions/ProductsAction'

import './ProductList.css'
import ModalpopUp from '../Modal/ModalpopUp'



function ProductList() {
    const products = useSelector(state => state.products.data)

   const dispatch =useDispatch();
   const getData =()=>dispatch(ProductsAction())
   const deleteData =(id)=>dispatch(deleteProductsAction(id))
 
  console.log(products,"ProductList")

    useEffect(() => {
        getData();
      }, []);
    
   const handleRemove =(id)=>{
       deleteData(id)
       console.log(id)
   }
    return (
        <>
               {products.map((data)=>{
                   return <div key={data.p_id} className="product">
                          <div className="product__item image">
                           <img src={`images/${data.p_image}.jpg`} alt={data.p_image}  width="180rem" height="250rem"/>
                          </div>
                          <div className="product__item name">
                               <h3><span>{data.p_name}</span></h3>
                               <h4>Style #:<span>{data.p_style}</span></h4>
                               {/* <h4>Color: {data.p_selected_color.name}</h4> */}
                                    <div className="updates">
                                        <ul className="updates__list">
                                            <li className="updates__list__items edit"> <ModalpopUp id={data.p_id}/></li>
                                            <li className="updates__list__items remove"><button className="font-weight-bold buttondelete" onClick={()=>handleRemove(data.p_id)}>X  REMOVE</button></li>
                                            <li className="updates__list__items">SAVE FOR LATER</li>
                                        </ul>
                                    </div>
                               </div>
                          {/* <div className="product__item size"><h4>{data.p_selected_size.code}</h4></div> */}
                          <div className="product__item quantity">{data.p_quantity}</div> 
                          <div className="product__item price">${data.p_price}.00</div>

                   </div>
               })}
               
                 
        </>
    )
}

export default ProductList
