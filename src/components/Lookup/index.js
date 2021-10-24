// @flow
import React, { useState } from 'react';

import { Search } from '@icons';

import * as S from './styles';
import ModalDialog from './../ModalDialog';

type Props = {
  value?: string,
  name?: string,
  disabled?: boolean,
  className: string,
  readOnly?: boolean,
  placeholder?: string,
  onChange?: Function,
  modalContent?: string,
};

const Lookup = ({
  value,
  name,
  disabled,
  className,
  readOnly,
  placeholder,
  onChange,
  modalContent,
}: Props) => {
  // const [val, setVal] = useState(value);
  const [modalState, setModal] = useState(false);

  return (
    <S.LookupInputWrapper>
      <S.LookupInput
        type="text"
        name={name}
        // value={val}
        value={value}
        disabled={disabled}
        className={className}
        readOnly={readOnly}
        placeholder={placeholder}
        // onChange={e => setVal(e.target.value)}
        onChange={onChange}
      />
      <S.SearchWrapper onClick={() => setModal(true)}>
        <Search />
      </S.SearchWrapper>
      <ModalDialog isOpen={modalState} modalContent={modalContent} />
    </S.LookupInputWrapper>
  );
};

export default Lookup;
