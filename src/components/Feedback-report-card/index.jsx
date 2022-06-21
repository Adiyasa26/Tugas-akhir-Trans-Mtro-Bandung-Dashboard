import React from 'react';

import Star from '../Ratings/Star';

import './style.scss';

const FeedbackReportCard = props => {
  const { starCount } = props;

  const reviewer = 'Ilyas Adiyasa';

  return (
    <div className="feedback-report-card--container">
      <div className="feedback-report-card--container-photo">
        <h1>{reviewer[0].toUpperCase()}</h1>
      </div>
      <div className="feedback-report-card--container-review">
        <h2>{reviewer}</h2>
        <Star starCount={starCount} />
        <p>
          Aplikasi yang menarik perhatian, membantu saya untuk melakukan
          perkiraan waktu sampai di tujuan saya. Saya pikir pada awalnya menggunakan TMB akan tidak sama dengan menaiki kendaraan pribadi dikarenakan tidak ada jalur khusus tetapi ini adalah salah satu langkah preventif menanggulangi kemacetan. Terimakasih TMB.
        </p>
      </div>
    </div>
  );
};

export default FeedbackReportCard;
