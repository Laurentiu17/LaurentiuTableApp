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

const Maintenance = () => {
  let navigate = useNavigate();
  return (
    <S.MaintenanceWrapper>
      <MaintenanceIcon />
      <S.Text>This page is under maintenance. Please check out later.</S.Text>
      <Button primary onClick={() => navigate('../')}>
        Go Back
      </Button>
    </S.MaintenanceWrapper>
  );
};

export default Maintenance;
