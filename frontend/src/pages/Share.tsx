import { forwardRef } from 'react';
import Indicator from '../components/indicator';
import cloud from '../assets/cloud.svg';

const Share = () => {
  return (
    <div className={`flex flex-col items-start`}>
      <div
        className={`border border-neutral-300 bg-white
                    w-[600px] h-64 rounded-lg p-6
                    `}>
        <div className={'text-2xl text-gray-default'}>
          <h2>Set username and channel</h2>
        </div>
        <div className={'flex flex-col h-28 justify-between mt-5 '}>
          <span className={'flex items-center  justify-between w-[500px]'}>
            <Input ph={'Username'} />
            <div className={'ml-3'}>
              <Indicator checked={false} />
            </div>
          </span>
          <span className={'flex items-center justify-between w-[500px]'}>
            <Input ph={'Channel Name'} />
            <div className={'ml-3'}>
              <Indicator checked={true} />
            </div>
          </span>
        </div>
      </div>
      <div
        className={' mt-4 border border-neutral-300 bg-white w-[600px] h-60 rounded-lg p-8 px-10'}>
        <div
          className={`border w-full h-full rounded-xl
                      bg-gray-light flex items-center justify-center
          `}>
          <div className={'flex flex-col items-center text-gray-medium text-lg'}>
            <div className={'w-16 mr-6'}>
              <img src={cloud} alt={'cloud'} />
            </div>
            <div className={'w-[204px]'}>
              <h2>
                drag and drop to upload or <button className={'text-purple-default'}>browse</button>{' '}
                to choose files
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Share;

const Input = forwardRef<string, { ph: string }>(({ ph }) => {
  return (
    <input
      className={`border w-full border-neutral-200 placeholder-neutral-400 h-10 p-2 bg-gray-light
                  rounded-lg outline-none text-neutral-600 
                  `}
      placeholder={ph}
    />
  );
});
