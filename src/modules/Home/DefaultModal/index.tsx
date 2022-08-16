import { memo } from 'react'

import { Modal, ModalBody, ModalFooter, ModalHeader } from '~/components/Modal'

interface Props {
  open: boolean
  onClickOpen: () => void
  onClose: () => void
}

const DefaultModal = ({ open, onClickOpen, onClose }: Props) => (
  <div>
    <button
      type="button"
      data-testid="btn-default-modal"
      className="btn btn-contained"
      onClick={onClickOpen}
    >
      Open Default Modal
    </button>
    <Modal open={open} onClose={onClose} data-testid="modal-default">
      <ModalHeader onClose={onClose}>
        <h4> Default Modal </h4>
      </ModalHeader>
      <ModalBody data-testid="modal-default-body">
        <h4>Content</h4>
        {[...new Array(1)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </ModalBody>
      <ModalFooter data-testid="modal-default-footer">
        <button
          data-testid="btn-default-ok"
          type="button"
          className="btn btn-contained"
          onClick={onClose}
        >
          Ok
        </button>
        <button
          data-testid="btn-default-close"
          type="button"
          className="btn"
          onClick={onClose}
        >
          Close
        </button>
      </ModalFooter>
    </Modal>
  </div>
)

export default memo(DefaultModal)
