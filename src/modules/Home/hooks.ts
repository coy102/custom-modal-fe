import { useCallback, useState } from 'react'

const useHooks = () => {
  const [open, setOpen] = useState(false)

  const handleToggleModal = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  return {
    open,
    handleToggleModal,
  }
}

export default useHooks
