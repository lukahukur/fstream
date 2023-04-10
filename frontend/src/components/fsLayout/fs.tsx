import { Link, Outlet, useLocation } from 'react-router-dom';

import React from 'react';

const Fs = () => {
  const location = useLocation();

  return (
    <div className={`h-screen bg-gray-light pt-[64px] pl-10 2xl:pl-[308px] font-Roboto`}>
      <main className={`mt-2`}>
        <nav className={'w-fit flex justify-between items-center'}>
          <LinkComponent content={'send'} to={'share'} active={location.pathname == '/fs/share'} />
          <LinkComponent
            content={'receive'}
            to={'jstream'}
            active={location.pathname == '/fs/jstream'}
          />
        </nav>
        <div className={'mt-2'}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Fs;

const LinkComponent: React.FC<{ to: string; active: boolean; content: string }> = ({
  to,
  active,
  content
}) => {
  let A = 'bg-white border border-neutral-300';
  return (
    <Link
      className={`flex  items-center justify-center w-fit px-4 py-1 rounded-full ${
        active ? A : 'border border-gray-light'
      } `}
      to={to}>
      {content}
    </Link>
  );
};
