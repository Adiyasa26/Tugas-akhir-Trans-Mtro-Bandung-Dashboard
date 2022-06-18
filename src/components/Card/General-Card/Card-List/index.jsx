import React from 'react';

import './style.scss';

function CardList(props) {
  const { title, children } = props;

  return (
    <div className="card-list--container">
      <div className="card-list--container-header">{title}</div>
      <div className="card-list--container-main">{children}</div>
    </div>
  );
}

export default CardList;
