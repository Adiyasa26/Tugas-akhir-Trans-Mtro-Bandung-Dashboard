import React from 'react';

import CardList from '..';

const BiodataBus = props => {
  const { state } = props;
  const { selectedBus } = state;

  return (
    <CardList
      className="card-list--container"
      title={'Biodata Bus'}
      cardListType={'biodata'}
    >
      <div className="biodata-bus--container">
        <div className="biodata-bus--container-header">
          <div className="biodata-bus--container-header__left">
            <h1>{selectedBus.busNumber}</h1>
          </div>
          <div className="biodata-bus--container-header__right">
            <div className="biodata-bus--container-header__right-header">
              {`JALUR TMB KORIDOR ${selectedBus.busNumber}`}
            </div>
          </div>
        </div>
        <div className="biodata-bus--container-main">
          {selectedBus.destination}
        </div>
        <div className="biodata-bus--container-footer">
          <p>
            {selectedBus.detailInformation}
          </p>
          <p>
          {selectedBus.additionalInformation}
          </p>
        </div>
      </div>
    </CardList>
  );
};

export default BiodataBus;
