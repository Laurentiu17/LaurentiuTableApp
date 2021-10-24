import React, { useContext } from 'react';
import Button from '@components/Button';
import * as S from './styles';
import { GridContext } from '@context';

const LeftNav = () => {
  const { options, clearFilters, selectedRows } = useContext(GridContext);
  return (
    <>
      <S.LeftSideNav>
        <S.GridTitle>{options?.title}</S.GridTitle>
        <S.ButtonGroup>
          <Button
            label={'Clear Filters'}
            default
            className={'bold-btn'}
            onClick={clearFilters}
          />
          {selectedRows === 1 ? (
            <Button label={'Edit Row'} primary />
          ) : (
            selectedRows > 1 && <Button label={'Batch Edit'} primary />
          )}
        </S.ButtonGroup>
      </S.LeftSideNav>
    </>
  );
};

export default LeftNav;
