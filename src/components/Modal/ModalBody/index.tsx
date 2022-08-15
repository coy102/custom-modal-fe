import { memo } from 'react'

interface Props {
  children: React.ReactNode
  scrollable?: boolean
}

const ModalBody = ({ children, scrollable = false }: Props) => (
  <div className={`modal-body ${scrollable ? 'modal-dialog-scrollable' : ''}`}>
    {children}
  </div>
)

export default memo(ModalBody)
