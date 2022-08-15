import { memo } from 'react'

import Modal from '~/components/Modal'

const Home = () => (
  <div>
    Home
    <Modal open>
      <h1>Modal</h1>
    </Modal>
  </div>
)

export default memo(Home)
