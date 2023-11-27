import React from 'react'
import Countdown from 'react-countdown';


const FlashCountDown = () => {
  return (
    <>
      <div className='cd-cont'>
        <Countdown date={Date.now() + 100000000} />
      </div>
    </>
  )
}

export default FlashCountDown
