import React from 'react'
import styles from './Rightbar.module.css'
const Details = () => {
  return (
    <div className={styles.DetailsPage}>
        <p style={{fontSize:'14px',color:'#757088',fontWeight:'bold',margin:'20px',paddingTop:'10px'}}>What is REVITAL H?</p>
        <p style={{fontSize:'14px',color:'#58595b',fontWeight:'400',margin:'20px'}}> REVITAL H is a health supplement which contains:</p>
        <div>
            <ul>
                <li className={styles.ListItem}>Ginseng is an herbal supplement</li>
                <li className={styles.ListItem}>Vitamins such as vitamin A, vitamin C, vitamin D, vitamin E, vitamin B1, vitamin B2, vitamin B3, vitamin B6, vitamin B9 (Folic Acid), vitamin B12</li>
                <li className={styles.ListItem}>Minerals such as Calcium, Phosphorous, Zinc, Iron, Magnesium, Potassium, Manganese, Copper, Iodine</li>
            </ul>
        </div>
    </div>
  )
}

export default Details