import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Arrow } from 'assets/icons';

import * as S from './styles';

const SimpleDropdown = ({ label, children, options }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [option, setOption] = useState('');

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <S.SimpleDropdownWrapper>
      <S.Label className="control-label" dropdownOpen={dropdownOpen}>
        {label}
        {children}
      </S.Label>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          {option ? option : 'Select an option'}
          <S.ArrowWrapper dropdownOpen={dropdownOpen}>
            <Arrow />
          </S.ArrowWrapper>
        </DropdownToggle>
        <DropdownMenu>
          {options.map(item => (
            <DropdownItem
              onClick={() => setOption(item.label)}
              key={Math.random()}
            >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </S.SimpleDropdownWrapper>
  );
};

export default SimpleDropdown;
