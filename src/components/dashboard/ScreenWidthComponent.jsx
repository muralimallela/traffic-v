import React, { useState, useEffect } from 'react';

const ScreenWidthComponent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex justify-center text-3xl font-bold mt-32 ml-20'>
      <p>Current screen width: {screenWidth}px</p>
    </div>
  );
};

export default ScreenWidthComponent;
