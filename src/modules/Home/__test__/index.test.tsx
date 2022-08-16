import { fireEvent, render, within } from '@testing-library/react'
import React from 'react'

import Home from '~/modules/Home'

const EVENT_BUTTON = {
  BTN_DEFAULT: 'btn-default-modal',
  BTN_SCROLLABLE: 'btn-scrollable-modal',
  BTN_CLOSE_MODAL_ICON: 'btn-modal-close',
}

const MODAL_ID = {
  MODAL_DEFAULT: 'modal-default',
  MODAL_SCROLLABLE: 'modal-scrollable',
}

describe('Test render home and modal', () => {
  it('should open Home module on the first time', () => {
    const { getByTestId } = render(<Home />)

    const homeContainer = within(getByTestId('home-container'))

    // #1 Render page
    expect(getByTestId('home-container')).toBeTruthy()
    expect(homeContainer.getByText('Home')).toBeTruthy()

    // #1 Button default modal
    expect(homeContainer.queryByTestId(EVENT_BUTTON.BTN_DEFAULT)).toBeTruthy()
    expect(homeContainer.queryByTestId(MODAL_ID.MODAL_DEFAULT)).toBeNull()

    // #1 Button scrollable modal
    expect(
      homeContainer.queryByTestId(EVENT_BUTTON.BTN_SCROLLABLE)
    ).toBeTruthy()
    expect(homeContainer.queryByTestId(MODAL_ID.MODAL_SCROLLABLE)).toBeNull()
  })

  it('should open and close DefaultModal correctly', () => {
    const { getByTestId } = render(<Home />)

    const homeContainer = within(getByTestId('home-container'))

    expect(getByTestId('home-container')).toBeTruthy()

    // #1 Render page
    expect(homeContainer.getByText('Home')).toBeTruthy()
    expect(homeContainer.queryByTestId(EVENT_BUTTON.BTN_DEFAULT)).toBeTruthy()

    // #2 On click button open modal default
    fireEvent.click(homeContainer.queryByTestId(EVENT_BUTTON.BTN_DEFAULT))
    expect(homeContainer.queryByTestId(MODAL_ID.MODAL_DEFAULT)).toBeTruthy()

    // #3 On click close by closeIcon default modal
    fireEvent.click(
      homeContainer.queryByTestId(EVENT_BUTTON.BTN_CLOSE_MODAL_ICON)
    )
    expect(homeContainer.queryByTestId(MODAL_ID.MODAL_DEFAULT)).toBeNull()

    // #4 Expect that scrollable modal is not opening
    expect(
      homeContainer.queryByTestId(EVENT_BUTTON.BTN_SCROLLABLE)
    ).toBeTruthy()
    expect(homeContainer.queryByTestId(MODAL_ID.MODAL_SCROLLABLE)).toBeNull()
  })

  it('should open and close ScrollableModal correctly', () => {
    const { getByTestId } = render(<Home />)

    const homeContainer = within(getByTestId('home-container'))

    expect(getByTestId('home-container')).toBeTruthy()

    // #1 Render page
    expect(homeContainer.getByText('Home')).toBeTruthy()

    // #2 Expect that default modal is not opening
    expect(homeContainer.queryByTestId(EVENT_BUTTON.BTN_DEFAULT)).toBeTruthy()
    expect(homeContainer.queryByTestId(MODAL_ID.MODAL_DEFAULT)).toBeNull()

    // #3 On click button open scrollable modal
    expect(
      homeContainer.queryByTestId(EVENT_BUTTON.BTN_SCROLLABLE)
    ).toBeTruthy()
    fireEvent.click(homeContainer.queryByTestId(EVENT_BUTTON.BTN_SCROLLABLE))
    expect(homeContainer.queryByTestId(MODAL_ID.MODAL_SCROLLABLE)).toBeTruthy()

    // #4 On click close by closeIcon modal default
    fireEvent.click(
      homeContainer.queryByTestId(EVENT_BUTTON.BTN_CLOSE_MODAL_ICON)
    )
    expect(homeContainer.queryByTestId(MODAL_ID.MODAL_SCROLLABLE)).toBeNull()
  })
})
