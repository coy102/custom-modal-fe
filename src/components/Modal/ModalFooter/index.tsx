import { memo } from 'react'

interface Props {
  children: React.ReactNode
  'data-testid'?: string
}

const ModalFooter = ({ children, 'data-testid': dataTestid }: Props) => (
  <div className="modal-footer" data-testid={dataTestid}>
    {children}
  </div>
)

export default memo(ModalFooter)
