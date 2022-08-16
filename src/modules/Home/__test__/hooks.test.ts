import { act, renderHook } from '@testing-library/react-hooks'

import useHooks from '../hooks'

const handleToggleModal = expect.any(Function)

const resultStateDefaultModal = {
  modal: 'default-modal',
  handleToggleModal,
}

const resultStateScrollableModal = {
  modal: 'scrollable-modal',
  handleToggleModal,
}

const resultCloseAnyModal = {
  modal: '',
  handleToggleModal,
}

describe('test hooks home', () => {
  it('should return state open DefaultModal', () => {
    const { result } = renderHook(() => useHooks())

    act(() => {
      result.current.handleToggleModal('default-modal')()
    })

    expect(result.current).toEqual(resultStateDefaultModal)
  })

  it('should return state close DefaultModal', () => {
    const { result } = renderHook(() => useHooks())

    act(() => {
      result.current.handleToggleModal('')()
    })

    expect(result.current).toEqual(resultCloseAnyModal)
  })

  it('should return state open ScrollableModal', () => {
    const { result } = renderHook(() => useHooks())

    act(() => {
      result.current.handleToggleModal('scrollable-modal')()
    })

    expect(result.current).toEqual(resultStateScrollableModal)
  })

  it('should return state close ScrollableModal', () => {
    const { result } = renderHook(() => useHooks())

    act(() => {
      result.current.handleToggleModal('')()
    })

    expect(result.current).toEqual(resultCloseAnyModal)
  })
})
