import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
// import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './ModalpopUP.css' 
import { editProductsAction } from '../../Actions/ProductsAction'


function ModalpopUp({id,log}) {
    const [show, setShow] = useState(false);
    const [data,setData] =useState(log)
    
    // const [quantty,setQuanty] =useState(data.p_quantity)
    const  [size,setSize]=useState(data.p_selected_size.code)
    const [color,setColor] =useState(data.p_selected_color.name)
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch =useDispatch();
    const updaData =(data)=>dispatch(editProductsAction(data))
    
    const handleSubmit=()=>{
      updaData(data)  
    }
   

    return (
      <>
        <Button variant="white" onClick={handleShow} className="font-weight-bolder">
          EDIT
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
               
          </Modal.Header>
          <Modal.Body>
             <div className="content">
                <h2>{log.p_name}</h2>
                <div>{`${log.c_currency}${log.p_price}.00`}</div>
                <h3>{log.p_style}</h3>
                <div className="colors">{log.p_available_options.colors.map((color)=>{
                    return <div  key={color.hexcode}  >
                               <div onClick={()=>setData({...data,p_selected_color:{name:color.name}})} className="colorsall" style={{backgroundColor:`${color.hexcode}`}}></div>
                          </div>
                })}</div>
                <h3>Color:{data.p_selected_color.name}</h3>
                <div className="manuval">
                <select value={data.p_selected_size.code}  onChange={(e)=>setData({...data,p_selected_size:{code:e.target.value}})}  >
                  {log.p_available_options.sizes.map((size)=>{
                    return  <option value={size.code} >{size.name}</option>
                         
                })}
                  </select>
                 <input type="number" className="quantity" value={data.p_quantity}  onChange={(e)=>setData({...data,p_quantity:e.target.value})} />
                </div>
                <button className="button_edit " onClick={handleSubmit}>edit</button>
                <div className="check">check product details</div>

              </div>
             <div className="img">
               <img src={`images/${log.p_image}.jpg`} alt={log.p_image}  width="250rem" height="250rem"/>
             </div>  
         
           
          </Modal.Body>
         
        </Modal>
      </>
    );
}

export default ModalpopUp



 