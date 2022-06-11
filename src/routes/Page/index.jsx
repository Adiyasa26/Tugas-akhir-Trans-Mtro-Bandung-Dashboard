import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Prediction from './Prediction';

const Page = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="prediction" element={<Prediction />} />
    </Routes>
  );
};

export default Page;
