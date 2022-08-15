import { useCallback, useState } from 'react'

type ModalType = 'default-modal' | 'scrollable-modal' | ''

const useHooks = () => {
  const [modal, setModal] = useState<ModalType>('default-modal')

  const handleToggleModal = useCallback(
    (modalType: ModalType) => () => {
      setModal(modalType)
    },
    []
  )

  return {
    modal,
    handleToggleModal,
  }
}

export default useHooks
