import React from 'react';
import './App.css'
import {useSelector} from 'react-redux'
import ProductList from './component/ProductsList/ProductList';

function App() {

   const data =useSelector(state =>state.products.data)
 
   const len = data.length;
   
  
  return (
      <div className="container-fluid">
             <div className="container">
            <div className="header">
              <h2 className="header__head"> your Shopping Cart</h2>
              <p className="header__para">if the cart is compelety empty then we shall again add back the products for you</p>
            </div>
            <div className="shop">
                  <div className="shop__topbar">
                    <ul className="topbar">
                      <li className="topbar-item__items">{len} ITEMS</li>
                      <li className="topbar-item__size">SIZE</li>
                      <li className="topbar-item__qty">QTY</li>
                      <li className="topbar-item__price">PRICE</li>
                    </ul>
                  </div>
                    <div className="shop__mainmenu">
                      <ProductList />
                    </div>
                  <div className="shop__bottommenu">
                     <div className="col1">
                        <div className="col1__head">Need help or have questions ?</div>
                        <div className="col1__subhead">Call Custormer Service at <br/> 1-800-555-555</div>
                        <div className="col1__underline">chat with one of our stylist</div>
                        <div className="col1__underline">See return or exchange policy</div>
                     </div>
                     <div className="col2">
                            <div className="col2__part1">
                               <div className="col2__part1__s1">enter promotion code or gift <br /> card</div>
                               <div className="col2__part1__s2"><input type="text" className="part1-input" placeholder="Enter promo" /></div>
                               <div className="col2__part1__s3"><button className="part1-button">APPlY</button></div>
                            </div>
                              <div className="col2__part2">
                                  <div className="col2__part2__r1">subtotal</div>
                                  <div className="col2__part2__r2">${data.reduce((acc,data)=> (data.p_price*data.p_quantity)+acc,0 )}</div>
                                  <div className="col2__part2__r3">promotion code aj10 applied</div>
                                  <div className="col2__part2__r4"> $5.90 </div>
                                  <div className="col2__part2__r5">
                                    <div className="col2__part2__r5__m1">estimated shipping</div>
                                    <p className="col2__part2__r5__m2">your quality for free shppng because your code is over $50</p>
                                  </div>
                                  <div className="col2__part2__r6">FREE</div>
                              </div>
                                <div className="col2__part3">
                                      <div className="col2__part3__t1">
                                        <h4 className="col2__part3__t1__h4">estimated total</h4>
                                        <div className="col2__part3__t1__p">Tax will be applied during checkout</div>
                                      </div>
                                    <div className="col2__part3__t2">${Number(data.reduce((acc,data)=> (data.p_price*data.p_quantity)+acc,-5.90 ))}</div>
                                </div>
                                <div className="col2__part4">
                                    <div className="col2__part4__c1">continue Shopping</div>
                                    <div className="col2__part4__c2"><button className="btn btn-info">CHECKOUT</button></div>
                                </div>
                     </div>
                  </div>
            </div>
        </div>
      </div>
  );
}

export default App;