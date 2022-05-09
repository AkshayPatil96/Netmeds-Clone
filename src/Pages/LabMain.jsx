import React from 'react'
import LImage from './LImage'
import PopularTests from './PopularTests'
import RForm from './RForm'

const LabMain = () => {
  return (
      <>
        <div style={{display:'flex'}}>
            <div>
                <LImage/>
            </div>
            <div style={{marginLeft:'20px'}}>
                <RForm/>
            </div>
        </div>
      </>
  )
}

export default LabMain