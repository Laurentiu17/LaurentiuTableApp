import React, { Fragment, useState } from 'react';
// import { boolean } from '@storybook/addon-knobs';

import Modal from '@components/ModalDialog';

export default {
  title: 'Modal',
  component: Modal,
};

export const ModalTest = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setOpen(!isOpen)}>openModal</button>
      <Modal isOpen={isOpen} />
    </Fragment>
  );
};
