import React,{useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useSelector} from 'react-redux'

function ModalpopUp({id}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(id,data,"selectedddddddd")


    const data =useSelector(state =>state.products.data)

    const [item,setItem]=useState({})

    useEffect(()=>{
         setItem(data.filter((data)=> data.p_id === id))
    },[data])

    console.log(item,"123456")
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
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
         
        </Modal>
      </>
    );
}

export default ModalpopUp



 