import React from 'react'

const Button = ({btnClasses,dataBtnNum,btnText}) => {
  return (
    <>
      <div className={btnClasses} data-btn-num={dataBtnNum}>
        {btnText}
     </div>
    </>
  )
}

export default Button
