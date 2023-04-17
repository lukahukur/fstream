import Indicator from '../../components/Indicator'
import Form from '../../components/Form'
import { RefObject, useRef } from 'react'

const Get = () => {
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

export default Get
