import { forwardRef, useRef } from 'react'
import Indicator from '../components/Indicator'
import cloud from '../assets/cloud.svg'
import Form from '../components/Form'

const Share = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const channelRef = useRef<HTMLInputElement>(null)
  return (
    <div className={`flex flex-col items-start`}>
      <Form
        inputs={{
          username: usernameRef,
          channelName: channelRef
        }}
      />
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
  )
}
export default Share
