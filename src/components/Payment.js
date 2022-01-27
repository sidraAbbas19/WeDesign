import React from 'react';
import './Payment.css';
import { TextField} from '@material-ui/core';
function Payment() {
  return (
  <>
<div className="credit">
     <div className="credit-body">
        <div className="row">
            <div className="col-md-7">
                <div className="left ">
                    <div className="row"> <span className="header">Payment Methods</span>
                        <div className="icons"> <img src="https://img.icons8.com/color/48/000000/visa.png" /> <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /> <img src="https://img.icons8.com/color/48/000000/maestro.png" /> </div>
                    </div>
                    <form >
                    <span>Cardholder's name:</span> <input placeholder="Linda Williams"/> <span>Card Number:</span> <input placeholder="0125 6780 4567 9909"/>
                        <div className="row">
                            <div className="col-4"><span>Expiry date:</span> <input placeholder="YY/MM"/> </div>
                            <div className="col-4"><span>CVV:</span> <input id="cvv"/> </div>
                        </div> <input type="checkbox" id="save_card" className="align-left"/> <label for="save_card">Save card details to wallet</label>
                   
                    </form>
                    
                </div>
            </div>
            <div className="col-md-5">
                <div className="right border-left ">
                    <div className="header">Order Summary</div>
                  
                    <div className="row lower">
                        <div className="col text-left">Subtotal</div>
                        <div className="col text-right">$ 46.98</div>
                    </div>
                    <div className="row lower">
                        <div className="col text-left">Delivery</div>
                        <div className="col text-right">Free</div>
                    </div>
                    <div className="row lower">
                        <div className="col text-left"><b>Total to pay</b></div>
                        <div className="col text-right"><b>$ 46.98</b></div>
                    </div>
                    
                    <button id="btn" className="button button-primary">Place order</button>
                    <p className="text-muted text-center">Complimentary Shipping & Returns</p>
                </div>
            </div>
        </div>
    </div>
    <div> </div>
</div>





  {/* <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
       
        <div className="col-md-6 ">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3 ">
                    <h1 className="text-left">Payment Options</h1>
                </div>
                <div className='dropdown-divider'> </div>
                <h4 className="text">Credit and Debit Card</h4>

                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Full Name</label> <TextField  placeholder='Enter first name' fullWidth required/></div>
                    <div className="col-md-6"><label className="labels">Last Name</label> <TextField  placeholder='Enter second name' fullWidth required/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Card Number</label>  <TextField  placeholder='Enter Username' fullWidth required/> </div>
                    <div className="col-md-12"><label className="labels">Expiry Date </label>  <TextField  placeholder='Enter Address' fullWidth required/>  </div>
                </div>
               
                </div>
        </div>
        <div className="col-md-4">
            <div className="p-6 py-5">
                <div className="button">
                <div className="mt-5 text-center"><a href="/CreatePortfolio" className="button button-primary">Save Profile</a></div>
          
            </div>
        </div>
        </div>
    </div>
    </div> */}
  </>
  );
}

export default Payment;
