import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { SignOutUser } from '../../../utils/firebase/Firebase.utils';

import LogoTmb from '../../../icon/Logo_TMB_Trans_Metro_Bandung.jpg';

import './style.scss';

const Home = () => {
  const currentUser = useSelector(state => state.userData.currentUser);

  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      SignOutUser();
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-article">
      <div className="navigation-bar">
        <span>
          <Link style={{ color: '#3e4345', textDecoration: 'none' }} to="/trans-metro-bandung/home">Dashboard</Link>
        </span>
        <span
          className={`logout${currentUser ? `` : `-hide`}`}
          onClick={handleLogout}
        >
          Keluar
        </span>
      </div>
      <div className="main-article--container">
        <h1>Selamat Datang di Website Trans Metro Bandung</h1>
        <img src={LogoTmb} alt="Logo TMB" />
        <p>
          Trans Metro Bandung adalah layanan bus perkotaan di Kota Bandung yang
          dioperasikan oleh Dinas Perhubungan Kota Bandung. Layanan ini secara
          resmi dioperasikan pada 23 September 2009. Saat ini, Trans Metro
          Bandung mempunyai lima koridor utama dan satu koridor pengumpan
          (feeder) yang sudah berjalan. Bus ini diharapkan akan mengurangi
          jumlah volume kendaraan dan solusi kemacetan di Kota Bandung.
          Pemerintah Kota Bandung bertujuan menjadikan Trans Metro Bandung
          sebagai layanan transportasi massal dengan harga murah, fasilitas dan
          kenyamanan yang terjamin serta tepat waktu ke tujuan. Saat ini armada
          bus Trans Metro Bandung dapat di ketahui lokasinya secara realtime
          melalui aplikasi BEMO–Bandung Easy Mobility (bersama dengan armada
          Bandung Tour on Bus dan Bis Sekolah). Tidak hanya untuk mengetahui
          posisi armada bus Trans Metro Bandung, aplikasi ini juga dapat
          membantu untuk mengetahui shelter terdekat, tempat wisata apa saja
          yang dilalui oleh Trans Metro Bandung, dan fitur-fitur lainnya.
        </p>
        <span>diambil dari Wikipedia</span>
        <h2>
          Ingin melihat informasi tiap bus Trans Metro Bandung? Lanjutkan ke{' '}
          <Link
            style={{ color: 'blue', textDecoration: 'none' }}
            to="/trans-metro-bandung/home"
          >
            Dashboard Trans Metro Bandung
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Home;
