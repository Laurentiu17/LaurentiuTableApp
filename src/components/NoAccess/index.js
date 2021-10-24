import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NoAccessIcon } from '@icons';
import Button from '@components/Button';

import * as S from './styles';

/**
  TODO: change button element with component after the design system branched is merged to develop
  TODO: Add route to Go Back button.
  TODO: Add language
  TODO: Add request access? 
**/

const NoAccess = () => {
  let navigate = useNavigate();
  return (
    <S.NoAccessWrapper>
      <NoAccessIcon />
      <S.Text>You don&apos;t have access to this page.</S.Text>
      <Button primary onClick={() => navigate('../')}>
        Go Back
      </Button>
    </S.NoAccessWrapper>
  );
};

export default NoAccess;
