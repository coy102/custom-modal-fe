import { memo } from 'react'

interface Props {
  children: React.ReactNode
  open: boolean
}

const Modal = ({ children, open }: Props) => {
  if (!open) return null

  return <div className="modal">{children}</div>
}

export default memo(Modal)
