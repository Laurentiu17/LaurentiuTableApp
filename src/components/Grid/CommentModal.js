import React from 'react';
import Button from '@components/Button';
import * as S from './styles';
import { Close } from '@icons';

const CommentModal = ({ content, setInputValue, submit, close }) => {
  return (
    <S.CommentForm
      onSubmit={e => {
        e.preventDefault();
        submit();
      }}
    >
      <Close onClick={close} />
      <S.TextArea
        type={'text'}
        defaultValue={content}
        onChange={e => setInputValue(e.target.value)}
      />
      <Button primary label={'Save'} type="submit" />
    </S.CommentForm>
  );
};

export default CommentModal;
