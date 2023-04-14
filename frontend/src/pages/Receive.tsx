import Indicator from '../components/Indicator'
import Form from '../components/Form'
import { RefObject, useRef } from 'react'

const Receive = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const channelRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <Form
        inputs={{
          username: usernameRef,
          channelName: channelRef
        }}
      />
    </>
  )
}

export default Receive
