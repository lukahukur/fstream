import React from 'react';
import Logo from '../assets/logo';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className={'px-10 flex justify-start w-full 2xl:pl-[16%] 2xl:px-10 font-Roboto'}>
      <nav className={'w-full  2xl:w-[1290px] flex justify-between'}>
        <Link to={''}>
          <Logo />
        </Link>

        <div className={'flex text-xl items-center justify-between w-52'}>
          <Link to={'/fs/jstream'}>join stream</Link>
          <Link to={'https://github.com/lukahukur/fstream'}>github</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
