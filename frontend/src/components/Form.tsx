import Indicator from './Indicator'
import React, {
  Dispatch,
  FC,
  forwardRef,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react'

type FormArgType = {
  inputs: {
    username: RefObject<HTMLInputElement>
    channelName: RefObject<HTMLInputElement>
  }
}

const toggleState = <T = boolean | null,>(_Set: Dispatch<SetStateAction<T>>, _Val: T) => {
  _Set(_Val)
}

const isValid = (str: string) => /^(?=.*\d)(?=.*[\W_])(?!.*\s).{8,}$/.test(str)

const validate =
  <T = boolean | null,>(_Set: Dispatch<SetStateAction<T>>) =>
  (str: string) =>
    toggleState(_Set, isValid(str) as T)

const Form: FC<FormArgType> = ({ inputs }) => {
  const [isUsernameValid, setUVS] = useState<boolean | null>(null)
  const [isChannelNameValid, setCNS] = useState<boolean | null>(null)

  const validateUsername = useCallback((str: string) => setUVS(str.length >= 4), [])
  const validateChannel = useCallback((str: string) => validate(setCNS)(str), [])

  return (
    <div
      className={`border border-neutral-300 bg-white
                    w-[600px] h-64 rounded-lg p-6
                    `}>
      <div className={'text-2xl text-gray-default'}>
        <h2>Set username and channel</h2>
      </div>
      <div className={'flex flex-col h-28 justify-between mt-5 '}>
        <span className={'flex items-center  justify-between w-[500px]'}>
          <Input
            ph={'Username'}
            onChange={(e) => validateUsername(e.target.value)}
            ref={inputs.username}
          />
          <div className={'ml-3'}>
            <Indicator checked={isUsernameValid} />
          </div>
        </span>
        <span className={'flex items-center justify-between w-[500px]'}>
          <Input
            ph={'Channel Name'}
            onChange={(e) => validateChannel(e.target.value)}
            ref={inputs.channelName}
          />
          <div className={'ml-3'}>
            <Indicator checked={isChannelNameValid} />
          </div>
        </span>
      </div>
    </div>
  )
}

export default Form

const Input = forwardRef<HTMLInputElement, { ph: string; onChange: (...args: any[]) => void }>(
  ({ ph, onChange }, ref) => {
    return (
      <input
        className={`border w-full border-neutral-200 placeholder-neutral-400 h-10 p-2 bg-gray-light
                  rounded-lg outline-none text-neutral-600 
                  `}
        placeholder={ph}
        ref={ref}
        onChange={onChange}
      />
    )
  }
)
