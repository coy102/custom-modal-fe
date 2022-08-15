import { memo } from 'react'

import { Modal, ModalBody, ModalFooter, ModalHeader } from '~/components/Modal'

interface Props {
  open: boolean
  onClickOpen: () => void
  onClose: () => void
}

const DefaultModal = ({ open, onClickOpen, onClose }: Props) => (
  <div>
    <button type="button" className="btn btn-contained" onClick={onClickOpen}>
      Open Default Modal
    </button>
    <Modal open={open}>
      <ModalHeader onClose={onClose}>Header</ModalHeader>
      <ModalBody>Body</ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-contained" onClick={onClose}>
          Ok
        </button>
        <button type="button" className="btn" onClick={onClose}>
          Close
        </button>
      </ModalFooter>
    </Modal>
  </div>
)

export default memo(DefaultModal)
