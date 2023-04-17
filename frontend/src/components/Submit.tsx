import { FC } from 'react'

const notBlured: string = `py-1 px-3 text-neutral-900 rounded-full bg-green-default`
const blured: string = `py-1 px-3 bg-neutral-200 rounded-full text-gray-medium`

const Submit: FC<{ blur: boolean; callback: (...args: any[]) => void }> = ({ blur, callback }) => {
  return (
    <button className={blur ? blured : notBlured} onClick={!blur ? callback : () => {}}>
      Submit
    </button>
  )
}

export default Submit
