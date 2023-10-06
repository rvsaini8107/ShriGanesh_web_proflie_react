import React from 'react'

const CommonHeading = ({classes="",hText}) => {
  return (
    <>
     <h2 className={classes+" common-heading"}>{hText}</h2> 
    </>
  )
}

export default CommonHeading
