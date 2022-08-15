import { memo } from 'react'

interface Props {
  children: React.ReactNode
  open: boolean
}

const Modal = ({ children, open }: Props) => {
  if (!open) return null

  return (
    <div className="modal-show">
      <div className="modal-dialog">{children}</div>
    </div>
  )
}

export default memo(Modal)
