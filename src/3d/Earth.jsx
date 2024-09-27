import React, { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Home = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading 3D Scene...</div>}>
        <Spline
          scene="https://prod.spline.design/SXa-XkS0vRp7DN5T/scene.splinecode"
        />
      </Suspense>
    </main>
  );
};

export default Home;
