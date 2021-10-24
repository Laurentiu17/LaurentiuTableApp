import React, { useContext, useState, useCallback } from 'react';
import { GridContext } from '@context';
import Button from '@components/Button';
import { useDrop } from 'react-dnd';
import * as S from './styles';
import GridSettingsItem from './GridSettingsItem';

const GridSettings = props => {
  const { headers, setHeaders, initialHeaders } = useContext(GridContext);
  const [headersCopy, setHeadersCopy] = useState(
    JSON.parse(JSON.stringify(headers))
  );

  // Modifies the Headers object
  const handleSubmitCustomize = () => {
    setHeaders(headersCopy);
  };

  // Set the HeadersCopy to the Grid's default values
  const clearFiltersFromModal = useCallback(() => {
    setHeadersCopy([...initialHeaders]);
  }, [setHeadersCopy, initialHeaders]);

  // Drag & Drop functionality
  const [, drop] = useDrop(() => ({ accept: 'header' }));
  return (
    <S.SettingModal ref={drop}>
      <S.CustomizeTitle>
        <p>Customize table</p>
        <div>
          <Button primary onClick={() => clearFiltersFromModal()}>
            Reset Default
          </Button>
          <Button
            primary
            onClick={() => {
              handleSubmitCustomize();
              props.close();
            }}
          >
            Save
          </Button>
          <Button secondaryDefault onClick={props.close}>
            Cancel
          </Button>
        </div>
      </S.CustomizeTitle>
      <S.CustomizeText>
        Use drag and drop functionality by clicking an row then moving it to
        desired position in the vertical list
      </S.CustomizeText>
      {headersCopy.map((column, i) => {
        return (
          <GridSettingsItem
            column={column}
            key={i}
            id={i + 1}
            setHeadersCopy={setHeadersCopy}
            headersCopy={headersCopy}
          />
        );
      })}
    </S.SettingModal>
  );
};

export default GridSettings;
