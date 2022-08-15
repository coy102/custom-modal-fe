import { memo } from 'react'

interface Props {
  children: React.ReactNode
  onClose?: () => void
}

const ModalHeader = ({ children, onClose = undefined }: Props) => (
  <div className="modal-header">
    {children}
    {onClose && (
      <div>
        <button type="button" className="btn" onClick={onClose}>
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    )}
  </div>
)

export default memo(ModalHeader)
