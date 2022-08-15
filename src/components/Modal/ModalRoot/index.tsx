import { memo } from 'react'

import useHooks from './hooks'

interface Props {
  children: React.ReactNode
  disableEsc?: boolean
  disableOutsideClick?: boolean
  onClose: () => void // close modal for onEscape or onCLickOutside
  open: boolean
}

const Modal = ({
  children,
  disableEsc = false,
  disableOutsideClick = false,
  onClose,
  open,
}: Props) => {
  const { ref } = useHooks({ onClose, disableEsc, disableOutsideClick })

  if (!open) return null

  return (
    <div className="modal-show">
      <div className="modal-dialog" ref={ref}>
        {children}
      </div>
    </div>
  )
}

export default memo(Modal)
