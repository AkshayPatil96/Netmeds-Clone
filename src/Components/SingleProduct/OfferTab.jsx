import React from 'react'
import styles from './Rightbar.module.css'
const OfferTab = () => {
  return (
    <div className={styles.OfferDiv}>
        <div style={{display:'flex',alignItems:'center'}}>
            <img src="https://cdn-icons-png.flaticon.com/512/879/879859.png" alt="" height={'25px'}  />
            <div style={{marginLeft:'20px'}}>
                <p style={{fontSize: '14px',textAlign:'left',marginTop:'5px'}}>Default Discount</p>
                <p style={{fontSize: '12px',fontWeight:'400',color:'#378f30',textAlign:'left',marginTop:'-10px'}}>You get 15% OFF on this product</p>
            </div>
        </div>
    </div>
  )
}

export default OfferTab