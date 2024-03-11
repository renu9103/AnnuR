import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function DailogBox(props) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [stock, setStock] = useState(0);
  const message = `Title = ${title},Price = ${price},DiscountPercentage = ${discountPercentage},stock = ${stock}`;

  const addProduct = () => {
    props.productadd(message)
  }

  const isSavebuttondisable = () => {
    return stock == '' || price == '' || discountPercentage == '' || title == '';
  }

  const handelClose = () => {
    setPrice(0);
    setDiscountPercentage(0);
    setStock(0);
    setTitle('');
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Product</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group row">
                <label htmlFor="input1" className="col-sm-2 col-form-label">TITLE</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="input1" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="input2" className="col-sm-2 col-form-label">PRICE</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="input2" value={price} onChange={(e) => {
                  if (!isNaN(e.target.value)) {
                    setPrice(e.target.value)
                  }
                }}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="input3" className="col-sm-2 col-form-label">DISCOUNT PERCENTAGE</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="input3" value={discountPercentage} onChange={(e) => {
                  if (!isNaN(e.target.value)) {
                    setDiscountPercentage(e.target.value)
                  }
                }}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="input3" className="col-sm-2 col-form-label">STOCK</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="input3" value={stock} onChange={(e) => {
                  if (!isNaN(e.target.value)) {
                    setStock(e.target.value)
                  }
                }}/>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handelClose}>Close</button>
            <button type="button" className="btn btn-primary" disabled={isSavebuttondisable()} onClick={addProduct}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
} 