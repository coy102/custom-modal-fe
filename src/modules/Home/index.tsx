import { memo } from 'react'

import DefaultModal from './DefaultModal'
import useHooks from './hooks'

const Home = () => {
  const { modal, handleToggleModal } = useHooks()
  return (
    <div>
      Home
      <DefaultModal
        onClickOpen={handleToggleModal('default-modal')}
        onClose={handleToggleModal('')}
        open={modal === 'default-modal'}
      />
    </div>
  )
}

export default memo(Home)
