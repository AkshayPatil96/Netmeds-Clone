import React from 'react'
import Details from '../Components/SingleProduct/Details'
import LeftBar from '../Components/SingleProduct/LeftBar'
import Rightbar from '../Components/SingleProduct/Rightbar'

const MainProductBar = () => {
  return (
    <div>
        <div style={{display:'flex'}}>
            <div style={{marginLeft:'200px'}}>
                <LeftBar/>
            </div>
            <div style={{marginLeft:'100px'}}>
                <Rightbar/>
            </div>
        </div>
        <Details/>
    </div>
  )
}

export default MainProductBar