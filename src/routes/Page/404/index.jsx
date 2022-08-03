import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/Button';

import './style.scss';

import NotFoundLogo from '../../../icon/20945990.jpg';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="not-found-page--container">
      <div className="not-found-page--container_text--container">
        <h1>404</h1>
        <h2>Halaman Tidak Ditemukan!</h2>
        <h3>Kami sarankan anda untuk kembali pada halaman utama.</h3>
        <Button onClick={handleClick}>
          Halaman Utama
        </Button>
      </div>
      <img src={NotFoundLogo} alt="Not Found Logo" />
      <a href="http://www.freepik.com">Designed by vectorjuice / Freepik</a>
    </div>
  );
};

export default NotFound;
