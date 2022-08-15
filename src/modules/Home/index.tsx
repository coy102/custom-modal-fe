import { memo } from 'react'

import DefaultModal from './DefaultModal'
import useHooks from './hooks'
import ScrollableModal from './ScrollableModal'

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
      <ScrollableModal
        onClickOpen={handleToggleModal('scrollable-modal')}
        onClose={handleToggleModal('')}
        open={modal === 'scrollable-modal'}
      />
    </div>
  )
}

export default memo(Home)
