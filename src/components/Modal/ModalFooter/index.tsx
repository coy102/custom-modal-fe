import { memo } from 'react'

interface Props {
  children: React.ReactNode
}

const ModalFooter = ({ children }: Props) => (
  <div className="modal-footer">{children}</div>
)

export default memo(ModalFooter)
