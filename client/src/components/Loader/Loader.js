import React from 'react'

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '6rem' }}>
      <div className="spinner-layer spinner-red">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  )
}

export default Loader
