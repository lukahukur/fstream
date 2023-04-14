import { FC } from 'react'
import check from '../assets/check.svg'
import cross from '../assets/cross.svg'

const Indicator: FC<{ checked: boolean | null }> = ({ checked }) => {
  return checked ? (
    <div className={'bg-green-default w-7 h-7  flex items-center justify-center rounded-full'}>
      <img src={check} alt={'checked'} className={'pt-[2px] pl-[1px]'} />
    </div>
  ) : checked === false ? (
    <div
      className={
        'bg-red-default w-7 h-7 flex items-center justify-center rounded-full text-[10px]'
      }>
      <img src={cross} alt={'not checked'} width={'20px'} />
    </div>
  ) : (
    <>
      <div
        className={
          'bg-transparent w-7 h-7 flex items-center justify-center rounded-full text-[10px]'
        }></div>
    </>
  )
}

export default Indicator
