import { memo } from 'react'

interface Props {
  children: React.ReactNode
}

const ModalBody = ({ children }: Props) => (
  <div className="modal-body">{children}</div>
)

export default memo(ModalBody)
