import React from 'react';

import './style.scss';

const SelectFilter = (props) => {
  const {title, children, ...otherProps} = props;
  return (
    <div className="select-container">
      <h1>{title}</h1>
      <select {...otherProps}>
        {children}
      </select>
    </div>
  )
}

export default SelectFilter