import React from 'react';

import './style.scss';

function BusSelected(props) {
  const { onClickSelectedBus, onClickClearSearch, className, busIsSelected } = props;
  return (
    <div className="selected-bus--container">
      <div className="selected-bus item" onClick={onClickSelectedBus}>
        {busIsSelected}
      </div>
      <div className={className} onClick={onClickClearSearch}>
        &times;
      </div>
    </div>
  );
}

export default BusSelected;
