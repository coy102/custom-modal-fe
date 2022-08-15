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
      Open Scrollable Modal
    </button>
    <Modal open={open} onClose={onClose}>
      <ModalHeader onClose={onClose}>Header</ModalHeader>
      <ModalBody scrollable>
        {[...new Array(50)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </ModalBody>
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
