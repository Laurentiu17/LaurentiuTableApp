import React, { useContext } from 'react';
import * as S from './styles';
import * as I from '@icons';
import SubLink from './SubLink';
import { DefaultDatas, General } from '@context';

const NavItem = ({ item, index }) => {
  const { setOpenNavBar, isMobile } = useContext(DefaultDatas);
  const { selectedNavItem, setSelectedNavItem } = useContext(General);
  const navigationLinkHandler = () => {
    item.nodes.length === 0 && isMobile && setOpenNavBar(false);
    if (selectedNavItem === item.key) {
      setSelectedNavItem(null);
    } else {
      setSelectedNavItem(item.key);
    }
  };
  const activeLink = selectedNavItem === item.key;
  const Icon = I[`${item.icon}`];

  return (
    <div>
      <S.NavigationLink
        active={activeLink ? 'active' : null}
        onClick={navigationLinkHandler}
      >
        <Icon />
        <S.NavTitle>{item.label}</S.NavTitle>
        {item?.nodes.length > 0 && <I.Arrow />}
      </S.NavigationLink>
      {activeLink && (
        <>
          {item?.nodes.map((itemlvl2, i) => (
            <SubLink item={itemlvl2} key={i} index={index} level={1} />
          ))}
        </>
      )}
    </div>
  );
};

export default NavItem;
