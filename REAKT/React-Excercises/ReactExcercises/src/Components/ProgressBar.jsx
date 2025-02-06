import React from 'react'


const ProgressBar= ({width : inputWidth}) => {
  return (
    <div className="container ">
    {inputWidth >= 0 && inputWidth <= 100 ? (
    <div
        className="progress-bar"
        style={{ width: `${inputWidth}%` }}
    ></div>
    ) : (
<p>Invalid input</p>
    )}
</div>
)
}

export default ProgressBar