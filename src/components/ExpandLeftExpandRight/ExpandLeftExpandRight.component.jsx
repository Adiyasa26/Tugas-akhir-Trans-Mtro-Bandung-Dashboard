import React from 'react';

import ExpandLeft from '../../icon/Expand_left.svg';
import ExpandRight from '../../icon/Expand_right.svg';

import './ExpandLeftExpandRight.style.css';

function ExpandLeftExpandRight(props) {
  return (
    <div className="flex-filter">
      <img src={ExpandLeft} alt="Expand Left" />
      <h3>{props.name}</h3>
      <img src={ExpandRight} alt="Expand Right" />
    </div>
  );
}

export default ExpandLeftExpandRight;
