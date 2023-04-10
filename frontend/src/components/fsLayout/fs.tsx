import { Outlet } from 'react-router-dom';
import Landing from '../../pages';
import React from 'react';

const Fs = () => {
  return (
    <div className={'h-screen bg-gray-light'}>
      <Outlet />
    </div>
  );
};
export default Fs;
