 import React from "react";
 import { Cardmain,Carddiv,CardProduct,CardTotal,ApplyPromo,P,Total,TotalSub,TotalSaving, Button } from "../Components/Cart.styled";

  const Cart = () =>{
    return (
    
        <Cardmain>
          <h1>Order Summary</h1>
           <Carddiv>
            <CardProduct>SADSFD</CardProduct>
            <CardTotal>
              <ApplyPromo>
                <P>APPLY PROMOCODE / NMS SUPERCASH</P> 
                <label class="container">
  <input type="radio" checked="checked" name="radio"/>
  xsdfsD
  <span class="checkmark"></span> 
</label>
              </ApplyPromo>
              <Total>
                <P>PAYMENT DETAILS</P>
                <TotalSub>
                <div>
                <p>MRP Total</p>
                <p>Netmeds Discount</p>
                <p>Total Amount*</p>
                </div>
             <div>
               <p>Rs 135.00</p>
               <p>-Rs 35.00</p>
               <p>Rs 100.00</p>
             </div>
                </TotalSub> 
                <TotalSaving>
                TOTAL SAVINGS  RS 20.25
              </TotalSaving>
              <TotalSub>
                <div>
                  <P>TOTAL AMOUNT</P>
                  <h3 style={{marginLeft:"15px",marginTop:"-5px"}}>Rs 114.75</h3>
                </div>
                <div>
                  <Button>PROCEED</Button>
                </div>
              </TotalSub>
              </Total>
          
            </CardTotal>
          </Carddiv> 
        </Cardmain>
      
    )
  }

  export default Cart