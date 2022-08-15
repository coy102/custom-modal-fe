import { memo } from 'react'

import Modal from '~/components/Modal'

import useHooks from './hooks'

const Home = () => {
  const { open, handleToggleModal } = useHooks()
  return (
    <div>
      Home
      <button type="button" onClick={handleToggleModal}>
        open modal
      </button>
      <Modal open={open}>
        <h1>Modal</h1>
      </Modal>
    </div>
  )
}

export default memo(Home)
