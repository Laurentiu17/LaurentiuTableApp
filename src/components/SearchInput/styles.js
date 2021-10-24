import styled from 'styled-components/macro';
import { device } from '@styles/breakpoints';

export const Input = styled.input`
  background: white;
  color: #3a4254;
  padding: 11px 16px 11px 8px;
  border-radius: 4px;
  border: 2px solid #dde4ee;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  box-shadow: none;
  width: 100%;

  &::placeholder {
    font-size: 15px;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  border: 2px solid #dde4ee;
  border-radius: 4px;
  //mobile
  min-width: calc (100vw - 32px);
  width: 240px;

  > input {
    flex: 1;
    width: ${props => (props.isActive ? '100%' : '0px')};
  }
  &.searchable_cell {
    width: 100%;
  }
  &.navbar_search {
    width: 240px;
    margin-right: 7px;
    @media (max-width: 1070px) {
      width: 165px;
    }
    @media (max-width: 444px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;

    path {
      fill: #306ed8;
    }
  }
`;
