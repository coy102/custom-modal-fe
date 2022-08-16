import { memo } from 'react'

interface Props {
  children: React.ReactNode
  'data-testid'?: string
  scrollable?: boolean
}

const ModalBody = ({
  children,
  'data-testid': dataTestid,
  scrollable = false,
}: Props) => (
  <div
    data-testid={dataTestid}
    className={`modal-body ${scrollable ? 'modal-dialog-scrollable' : ''}`}
  >
    {children}
  </div>
)

export default memo(ModalBody)
