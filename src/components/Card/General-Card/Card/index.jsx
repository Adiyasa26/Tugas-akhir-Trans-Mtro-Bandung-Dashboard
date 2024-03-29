import React from 'react';

import './style.scss';

const Card = (props) => {
  const { name, headerTitle, headerTag, mainTitle, mainTag } = props;
  
  return (
    <div key={name} className="universal-card-container">
      <div className="universal-card-container--header">
        <h3>{headerTitle}</h3>
        <p>{headerTag}</p>
      </div>
      <div className="universal-card-container--main">
        <h1>{mainTitle}</h1>
        <p>{mainTag}</p>
      </div>
    </div>
  );
}

export default Card;
