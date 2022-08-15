import { useCallback, useEffect, useRef } from 'react'

import { MODAL_EVENT_KEY } from '~/constants'

const useHooks = ({ onClose, disableEsc, disableOutsideClick }) => {
  const ref = useRef(null)

  // Handle Close the modal using ESC
  const handleEscKey = useCallback(
    (event) => {
      if (event.key === MODAL_EVENT_KEY.ESC && !disableEsc) {
        // Close the dialog when clicked ESC and not disabled
        onClose()
      }
    },
    [onClose, disableEsc]
  )

  const handleClickOutside = useCallback(
    (event) => {
      if (
        !disableOutsideClick &&
        ref?.current?.contains &&
        !ref?.current?.contains(event.target)
      ) {
        onClose()
      }
    },
    [onClose, ref]
  )

  useEffect(() => {
    document.addEventListener(MODAL_EVENT_KEY.KEYUP, handleEscKey, false)
    document.addEventListener(MODAL_EVENT_KEY.MOUSE_UP, handleClickOutside)

    return () => {
      document.removeEventListener(MODAL_EVENT_KEY.KEYUP, handleEscKey, false)
      document.removeEventListener(MODAL_EVENT_KEY.MOUSE_UP, handleClickOutside)
    }
  }, [handleEscKey])

  return {
    ref,
  }
}

export default useHooks
