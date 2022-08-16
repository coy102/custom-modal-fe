import { memo } from 'react'

import useHooks from './hooks'

interface Props {
  children: React.ReactNode
  'data-testid'?: string
  disableEsc?: boolean
  disableOutsideClick?: boolean
  onClose: () => void // close modal for onEscape or onCLickOutside
  open: boolean
}

const Modal = ({
  'data-testid': dataTestid,
  children,
  disableEsc = false,
  disableOutsideClick = false,
  onClose,
  open,
}: Props) => {
  const { ref } = useHooks({ onClose, disableEsc, disableOutsideClick })

  if (!open) return null

  return (
    <div className="modal-show" data-testid={dataTestid}>
      <div className="modal-dialog" ref={ref}>
        {children}
      </div>
    </div>
  )
}

export default memo(Modal)
