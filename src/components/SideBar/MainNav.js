import React, { useState } from 'react';
import NavItem from './NavItem';
import * as S from './styles';
import { QuickLinks, General } from '@context';
import { useSideBar } from '@services/utils';
const SideBar = ({ openNavBar, _ref }) => {
  const { sideBar, addQuickLinks } = useSideBar();
  const [selectedNavItem, setSelectedNavItem] = useState('');
  const [selectedSubLink, setSelectedSubLink] = useState([]);
  if (!sideBar) {
    return <div>Processing...</div>;
  }
  return (
    <General.Provider
      value={{
        selectedNavItem: selectedNavItem,
        setSelectedNavItem: setSelectedNavItem,
        selectedSubLink: selectedSubLink,
        setSelectedSubLink: setSelectedSubLink,
      }}
    >
      <QuickLinks.Provider
        value={{
          addQuickLink: addQuickLinks,
          quickLinks: sideBar[0].nodes,
        }}
      >
        <S.NavLinksList openNavBar={openNavBar} ref={_ref}>
          {sideBar.map((item, i) => (
            <NavItem item={item} key={i} index={i} />
          ))}
        </S.NavLinksList>
      </QuickLinks.Provider>
    </General.Provider>
  );
};

export default SideBar;
