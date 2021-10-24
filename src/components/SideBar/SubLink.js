import React, { useState, useContext, useEffect } from 'react';
import * as S from './styles';
import { MenuQuickLinks, Arrow } from '@icons';
import { QuickLinks, DefaultDatas, General } from '@context';

const SubLink = ({ item, level }) => {
  const [active, setActive] = useState(false);
  const [pinned, setPinned] = useState(false);
  const { setOpenNavBar, isMobile } = useContext(DefaultDatas);
  const { selectedSubLink, setSelectedSubLink } = useContext(General);
  const { addQuickLink, quickLinks } = useContext(QuickLinks);

  const navigationLinkHandler = () => {
    if (!active) {
      setSelectedSubLink(prev => {
        const links = prev.filter(link => link.level !== level);

        return [...links, { level, key: item.key }];
      });
    } else {
      setSelectedSubLink(prev => [
        ...prev.filter(sublink => sublink.key !== item.key),
      ]);
    }
  };

  useEffect(() => {
    setActive(
      selectedSubLink.filter(
        sublink => sublink.key === item.key && sublink.level === level
      ).length !== 0
    );
  }, [selectedSubLink]);

  const pinnedItem = () => {
    setPinned(!pinned);
    addQuickLink(item);
  };

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) {
      return;
    }
    setPinned(quickLinks.map(({ url }) => url).includes(item.url));
    return () => {
      isMounted = false;
    };
  }, [quickLinks]);

  return (
    <S.NavigationItem>
      {item.nodes.length === 0 && (
        <S.PinnedIcon pinned={pinned} onClick={pinnedItem}>
          <MenuQuickLinks />
        </S.PinnedIcon>
      )}

      {item.nodes.length > 1 ? (
        <S.NavigationSubGroup
          active={active ? 'active' : null}
          onClick={() => {
            navigationLinkHandler();
          }}
        >
          <S.SubNav>{item.label}</S.SubNav>
          <Arrow />
        </S.NavigationSubGroup>
      ) : (
        <S.NavigationSubLink
          to={item.url}
          active={active ? 'active' : null}
          onClick={e => {
            isMobile && setOpenNavBar(false);
            navigationLinkHandler();
          }}
        >
          <S.SubNav>{item.label}</S.SubNav>
        </S.NavigationSubLink>
      )}

      {active && (
        <ul>
          {item.nodes.length > 0 &&
            item.nodes.map((sublink, i) => (
              <li key={i}>
                <SubLink item={sublink} level={level + 1} />
              </li>
            ))}
        </ul>
      )}
    </S.NavigationItem>
  );
};

export default SubLink;
