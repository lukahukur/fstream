import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Illustration from '../assets/illustration.svg';

const Landing: React.FC = () => {
  return (
    <>
      <div
        className={`h-screen pt-[52px] flex
                    justify-start font-medium font-Roboto text-fontMain 
                    pl-10  2xl:pl-[16%]
                    `}>
        <section className={'py-44'}>
          <div className={'text-6xl w-[561px] leading-[70px]'}>
            <h1>Share files without uploading them to a remote server</h1>
          </div>
          <div className={'font-light text-2xl pt-4'}>
            <p>Send content directly to the recipient</p>
          </div>
          <div className={'pt-8'}>
            <Link
              to={'/fs/share'}
              className={'bg-purple-default text-white w-32 py-4 px-5 text-lg rounded-full'}>
              Share now
            </Link>
          </div>
          <div className={'font-light mt-4'}>
            <span>or </span>
            <Link to={'/fs/jstream'} className={'font-medium'}>
              join stream
            </Link>
          </div>
        </section>
        <div className={'flex items-center justify-center '}>
          <img src={Illustration} alt="illustration" />
        </div>
      </div>
    </>
  );
};

export default Landing;
