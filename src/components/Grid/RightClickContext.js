import React, { useState } from 'react';
import { Arrow } from '@icons';
import * as S from './styles';

const RightClickContext = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <S.ContextWrapper>
      <S.ContextItem>Add 1 Description</S.ContextItem>
      <S.ContextItem disabled>Removal disabled</S.ContextItem>
      <S.ContextItem
        onMouseEnter={() => setOpenSubMenu(true)}
        onMouseLeave={() => setOpenSubMenu(false)}
      >
        <p>SubMenu</p> <Arrow />
        {openSubMenu && (
          <S.ContextSubItemGroup>
            <S.ContextSubItem>SubSubItem 3</S.ContextSubItem>
            <S.ContextSubItem>SubSubItem 4</S.ContextSubItem>
          </S.ContextSubItemGroup>
        )}
      </S.ContextItem>
    </S.ContextWrapper>
  );
};

export default RightClickContext;
