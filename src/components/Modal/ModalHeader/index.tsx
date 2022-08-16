import React, { memo } from 'react'

interface Props {
  'data-testid'?: string
  children: React.ReactNode
  onClose?: () => void
}

const ModalHeader = ({
  children,
  'data-testid': dataTestid,
  onClose = undefined,
}: Props) => (
  <div className="modal-header" data-testid={dataTestid}>
    {children}
    {onClose && (
      <div>
        <button
          data-testid="btn-modal-close"
          type="button"
          className="btn"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    )}
  </div>
)

export default memo(ModalHeader)
