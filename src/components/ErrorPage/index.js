import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MaintenanceIcon } from '@icons';
import Button from '@components/Button';

import * as S from './styles';

/**
  TODO: change button element with component after the design system branched is merged to develop
  TODO: Add route to Go Back button.
  TODO: Add language
  TODO: Add "Notify When Ready"?
**/

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <S.ErrorPageWrapper>
      <MaintenanceIcon />
      <S.Text>Da arse is gone right out of 'er!</S.Text>
      <Button primary onClick={() => navigate('../')}>
        Go to dashboard
      </Button>
    </S.ErrorPageWrapper>
  );
};

export default ErrorPage;
