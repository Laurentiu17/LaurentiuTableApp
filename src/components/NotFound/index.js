import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PageNotFound } from '@icons';
import Button from '@components/Button';

import * as S from './styles';

/**
  TODO: change button element with component after the design system branched is merged to develop
  TODO: Add route to Go Back button.
  TODO: Add language
**/

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <S.NotFoundWrapper>
      <PageNotFound />
      <S.Text>Page not found</S.Text>
      <Button primary onClick={() => navigate('../')}>
        Go Back
      </Button>
    </S.NotFoundWrapper>
  );
};

export default NotFound;
