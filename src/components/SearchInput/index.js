// @flow
import React from 'react';
import * as I from '@icons';

import * as S from './styles';

const SearchInput = ({ className, dataTip, onChange, value }) => {
  return (
    <S.SearchInputWrapper className={className} data-tip={dataTip}>
      <S.Input type={'text'} onChange={onChange} value={value} />
      <S.SearchIconWrapper>
        <I.Search />
      </S.SearchIconWrapper>
    </S.SearchInputWrapper>
  );
};

export default SearchInput;
