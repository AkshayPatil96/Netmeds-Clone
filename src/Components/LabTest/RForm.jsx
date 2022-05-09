import React from 'react'
import styles from './LabTest.module.css'

const RForm = () => {
  return (
    <>
    <form action="">
        <div style={{display:'flex'}}>
            <div style={{display:'flex',textAlign:'center',alignItems:'center'}}>
                <img src="https://cdn-icons-png.flaticon.com/128/3022/3022350.png" height={'20px'} alt="" />
                <a style={{fontSize:'14px',fontWeight:'400'}}>Pathalogy</a>
            </div>
            <div style={{display:'flex',marginLeft:'10px',textAlign:'center',alignItems:'center'}}>
                <img src="https://cdn-icons.flaticon.com/png/128/3974/premium/3974884.png?token=exp=1652067541~hmac=ab0e3c4e598dda37399a481c1a9be18a" height={'20px'}  alt="" />
                <a style={{fontSize:'14px',fontWeight:'400'}}>RadioLogy</a>
            </div>
        </div>
        <p style={{fontSize:'14px',fontWeight:'400'}}>Please Fill in Your Details</p>
        <div style={{fontSize:'15px',fontWeight:'700',color:'#02b7c2',lineHeight:'16px'}}>
            <label htmlFor="name" >NAME</label>
        </div>
        <div>
            <input type="text" id='name' placeholder='' autoComplete='off'/>
        </div>
        
        <div style={{fontSize:'15px',fontWeight:'700',color:'#02b7c2',lineHeight:'16px',marginTop:'20px'}}>
            <label htmlFor="mobileNumber">MOBILE NUMBER</label>
        </div>

        <div>
            <input type="text" id='mobileNumber' placeholder='' autoComplete='off'/>
        </div>

        <div style={{fontSize:'15px',fontWeight:'700',color:'#02b7c2',lineHeight:'16px',marginTop:'20px'}}>
            <label htmlFor="pincode">PINCODE</label>
        </div>

        <div>
            <input type="text" id='pincode' placeholder='' autoComplete='off'/>
        </div>    

        <div style={{fontSize:'15px',fontWeight:'700',color:'#02b7c2',lineHeight:'16px',marginTop:'20px'}}>
            <label htmlFor="package">CHOOSE PACKAGE</label>
        </div>

        <div>
            <select name="package" id="">
                <option value="">Select</option>
                <option htmlFor="">NetMeds Swasthya</option>
                <option htmlFor="">Fever Profile</option>
                <option value="">NetMeds Cough-Fever Cold Package</option>
                <option value="">Anaemia Profile</option>
                <option value="">Thyroid Test</option>
                <option value="">Basic Allergy Package</option>
                <option value="">NetMeds Healthy Heart</option>
                <option value="">Advanced Heart Care</option>
                <option value="">Netmeds Diabetic Checkup</option>
                <option value="">Vitamin Tests</option>
                <option value="">Netmeds Advanced Care</option>
                <option value="">Covid Antibody GT Profile</option>
                <option value="">Covid Antibody IGG</option>
                <option value="">Covid Antibody Total</option>
                <option value="">Covid Antibody Panel</option>
                <option value="">Aarogyam C </option>
                <option value="">Aarogyam B </option>
                <option value="">Aarogyam A</option>
                <option value="">Aarogyam 1.3</option>
                <option value="">Aarogyam X</option>
                <option value="">Netmeds A</option>
                <option value="">Netmeds B</option>
                <option value="">Netmeds C</option>
                <option value="">Other</option>

            </select>
        </div>
        <div style={{marginTop:'20px',fontSize:'13px',fontWeight:'700'}}>
            <input type="checkbox" id="sub1" name="sub1"/>
            <label for="sub1">  I agree to Netmeds Terms and Conditions.</label>
        </div>
        <div style={{marginTop:'20px'}}>
            <button className={styles.bookBtn}>Book Now</button>
        </div>
    </form>
    </>
  )
}

export default RForm