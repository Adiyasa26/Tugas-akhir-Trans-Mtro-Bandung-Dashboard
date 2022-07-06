import React from 'react';

import CardList from '..';

const BiodataPenumpang = props => {
  const { state } = props;
  const { busesData, userData } = state;
  const { selectedBus } = busesData
  const { currentUser, userRole } = userData

  return (
    <CardList
      className="card-list--container"
      title={'Biodata Penumpang'}
      cardListType={'biodatauser'}
    >
      <div className="biodata--container">
        <div className="biodata--container-header">
          <div className="biodata--container-header__left">
            <h1>{currentUser.displayName[0].toUpperCase()}</h1>
          </div>
          <div className="biodata--container-header__right">
            <div className="biodata--container-header__right-header">
              {currentUser.displayName.toUpperCase()}
              <h2>{`Anda adalah ${userRole}`}</h2>
            </div>
          </div>
        </div>
        <div className="biodata--container-main">
          {`Tujuan anda kali ini adalah ${selectedBus.destination}`}
        </div>
        <div className="biodata--container-footer">
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

export default BiodataPenumpang;
