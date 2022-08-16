# Custom modal component

Custom Modal Component using my custom NextJS Frontend Boilerplate. 
[Live Demo](https://custom-modal-fe.vercel.app)

## Prerequisites

- [Yarn](https://yarnpkg.com/en/docs/install) v1.x.x

## Quick Start

### Start the app
```
yarn install
yarn start
```

### Run unit testing

```
yarn test
yarn test:coverage
```

## How to use

```jsx
import { Modal, ModalBody, ModalFooter, ModalHeader } from '~/components/Modal'

<Modal open={open} onClose={onClose}>
  <ModalHeader onClose={onClose}>
    <b> Modal Title </b>
  </ModalHeader>
  <ModalBody>
    <p>Modal Body</p>
  </ModalBody>
  <ModalFooter>
    <div>Modal Footer</div>
  </ModalFooter>
</Modal>
```

### Modal API

| Prop | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| children* | element | | A single child content element.|
| open* | bool | false | If true, the modal is shown. |
| onClose* | func | | Callback function to close the modal. |
| disableEsc | boole | false | If true, hitting escape will not fire the onClose.
| disableOutsideClick | bool | false | If true, clicking the modal backdrop will note fire the onClose.
| data-testid | string | | ID For testing the component.

### ModalHeader API

| Prop | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| children* | element | | A single child content element.|
| onClose | func | undefined | Callback function to close the modal, it will showing the close icon on the header when we use it. |
| data-testid | string | | ID For testing the component.

### ModalBody API

| Prop | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| children* | element | | A single child content element.|
| scrollable | bool | false | If true, the modal body will set max-height to 300px and scrollable |
| data-testid | string | | ID For testing the component.

### ModalFooter API

| Prop | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| children* | element | | A single child content element.|
| data-testid | string | | ID For testing the component.


