import React from 'react';

import './style.scss';

const CARD_LIST_TYPE_CLASSES = {
  biodata: "biodata",
  biodatauser: "biodata-user",
  ratingsviewer: "ratings-viewer",
  feedbackviewer: "feedback-viewer",
  healthcare: 'health-care',
  passengers: 'passengers',
  revenue: 'revenue',
  filterprediction: 'filterprediction',
  resultprediction: 'resultprediction',
};

const CardList = (props) => {
  const { title, children, cardListType } = props;

  return (
    <div
      className={`card-list--container ${
        cardListType ? CARD_LIST_TYPE_CLASSES[cardListType] : ``
      }`}
    >
      <div className="card-list--container-header">{title}</div>
      <div className="card-list--container-main">{children}</div>
    </div>
  );
}

export default CardList;
