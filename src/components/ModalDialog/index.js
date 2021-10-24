// @flow

import React from 'react';
import type { Node } from 'react';
import Modal, { ModalProvider } from 'styled-react-modal';

import * as S from './styles';

type Props = {
  isOpen: boolean,
  modalContent?: string,
  children?: Node,
};

const ModalDialog = (props: Props) => (
  <ModalProvider backgroundComponent={S.FadingBackground}>
    <Modal isOpen={props.isOpen}>
      <S.ModalWrapper>
        {props.modalContent}
        {props.children}
      </S.ModalWrapper>
    </Modal>
  </ModalProvider>
);

export default ModalDialog;
