import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../Redux/Category/action';
import styles from './Rightbar.module.css'
const OfferTab = () => {
 const { id } = useParams();
 const dispatch = useDispatch();

 const { singleData } = useSelector((state) => state.products);
 console.log("singleData: ", singleData);

 useEffect(() => {
     dispatch(getSingleProduct(id));
 }, [id]);

 const discountPrice = Math.ceil(
     ((singleData.strikeOfPrice - singleData.salePrice) /
         singleData.strikeOfPrice) *
         100
 );


  return (
    <div className={styles.OfferDiv}>
        <div style={{display:'flex',alignItems:'center'}}>
            <img src="https://cdn-icons-png.flaticon.com/512/879/879859.png" alt="" height={'25px'}  />
            <div style={{marginLeft:'20px'}}>
                <p style={{fontSize: '14px',textAlign:'left',marginTop:'5px'}}>Default Discount</p>
                <p style={{fontSize: '12px',fontWeight:'400',color:'#378f30',textAlign:'left',marginTop:'-10px'}}>You get {discountPrice}% OFF on this product</p>
            </div>
        </div>
    </div>
  )
}

export default OfferTab