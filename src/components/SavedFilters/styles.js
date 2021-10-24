import styled from 'styled-components/macro';

import { device } from '@styles/breakpoints';

export const SavedFilters = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #a8b2c7;
  color: #515d79;
  padding: 16px;
  border-radius: 4px;
  margin-top: 8px;
  font-weight: 500;
  @media ${device.tablet} {
    margin-top: 8px;
  }
`;

export const SavedFiltersOpen = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: #fff;
  border: 1px solid #a8b2c7;
  padding: 16px;
  border-radius: 4px;
  margin-top: 8px;
`;

export const FiltersTitle = styled.div`
  margin-right: 16px;
`;

export const FiltersMore = styled.div`
  position: relative;
  margin-left: auto;
  cursor: pointer;
`;

export const Dots = styled.div`
  position: relative;
  background: #515d79;
  width: 4px;
  height: 4px;
  border-radius: 50px;
  margin-right: 7px;

  &:before,
  &:after {
    content: '';
    height: 100%;
    width: 100%;
    background: inherit;
    position: absolute;
    border-radius: 50px;
  }

  &:before {
    left: 6px;
  }

  &:after {
    right: 6px;
  }
`;

export const SavedFilterClosed = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;

  svg {
    circle {
      fill: #dbe4ef;
      stroke: #dbe4ef;
    }
  }

  &:hover {
    svg {
      circle {
        fill: #306ed8;
        stroke: #306ed8;
      }
    }

    > div {
      color: #306ed8;
    }
  }
`;
export const SavedFilterClosedName = styled.div`
  margin-left: 8px;
  font-weight: initial;
`;
export const FiltersTitleAll = styled.div`
  margin-bottom: 8px;
  color: #515d79;
  font-weight: 500;
  display: flex;
  align-items: center;

  svg {
    transform: rotate(180deg);
  }
`;

export const SavedFiterAll = styled.div`
  border: 1px solid #a8b2c7;
  border-radius: 4px;
  margin-right: 8px;
  padding: 8px 16px;
  background: #e9ecf0;
  cursor: pointer;
  font-size: 14px;
  color: #515d79;
  position: relative;

  &:hover {
    border-color: #306ed8;
    color: #306ed8;
  }

  /* &:after {
    content: 'P';
    position: absolute;
    top: -5px;
    right: -5px;
    color: #fff;
    background: #306ed8;
    height: 18px;
    width: 18px;
    display: ${props => (props.isFilterPrivate ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-size: 11px;
    padding-left: 1px;
  } */
`;

export const PrivateIcon = styled.div`
  width: 24px;
  position: absolute;
  top: -10px;
  right: -11px;
`;

export const DropdownWrapper = styled.div`
  cursor: pointer;
`;

export const FilterGroupPublic = styled.div`
  display: flex;
`;
export const FilterGroupMy = styled.div``;

export const FiltersAll = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FiltersAllMyFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

export const FiltersAllPublicFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const FiltersAllSubtitle = styled.div`
  color: #515d79;
  width: 100px;
  margin-bottom: 6px;
`;
