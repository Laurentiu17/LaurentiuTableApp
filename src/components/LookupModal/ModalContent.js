import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import SearchInput from '@components/SearchInput';
import Button from '@components/Button';

import * as S from './styles';

/* eslint react/prop-types: 0 */

const ModalContent = ({
  columns,
  operators,
  tableData,
  searchValue,
  onSearch,
  onSave,
  onCancel,
}) => {
  const [selectedColumn, setSelectedColumn] = useState({});
  const [selectedComparison, setSelectedComparison] = useState({});
  const [selectedInputValue, setSelectedInputValue] = useState(
    searchValue || ''
  );
  const [doSearch, setDoSearch] = useState(true);

  const [comparison, setComparison] = useState([]);

  useEffect(() => {
    if (columns && columns.length) {
      // setSelectedColumn(columns[0]);
      setSelectedColumn(columns[columns.length - 1]);
    }
  }, [columns]);

  useEffect(() => {
    if (
      doSearch &&
      selectedColumn.value !== undefined &&
      selectedComparison.oData !== undefined
      // selectedInputValue !== undefined
    ) {
      setDoSearch(false);

      onSearch(
        selectedColumn.value,
        selectedComparison.oData,
        selectedInputValue
      );
    }
  }, [
    doSearch,
    selectedColumn,
    selectedComparison,
    selectedInputValue,
    onSearch,
  ]);

  useEffect(() => {
    const fieldType = selectedColumn.fieldType;

    if (fieldType && operators && operators[fieldType]) {
      setComparison(operators[fieldType]);
      // setSelectedComparison(operators[fieldType][0]);
      setSelectedComparison(operators[fieldType][2]);

      // handleLookupInputSearch();
    }
  }, [operators, selectedColumn]);

  const handleColumnChange = option => setSelectedColumn(option);
  const handleComparisonChange = option => setSelectedComparison(option);

  const selectStyles = {
    control: styles => ({
      ...styles,
      minHeight: '40px',
    }),
  };

  return (
    <S.CommentModalWrapper>
      <S.ModalLookupTopBar1>
        <S.ModalTitle>Lookup</S.ModalTitle>
      </S.ModalLookupTopBar1>
      <S.ModalLookupContent>
        {!columns || !operators ? (
          <></>
        ) : (
          <S.LookupContentTopBar>
            <S.LookupDropdownWrapper>
              <Select
                label={'Label'}
                options={columns}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={true}
                isMulti={false}
                // defaultValue={columns[3]}
                onChange={handleColumnChange}
                value={selectedColumn}
                styles={selectStyles}
              />
            </S.LookupDropdownWrapper>
            <S.LookupDropdownWrapper>
              <Select
                label={'Label'}
                options={comparison}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={true}
                isMulti={false}
                defaultValue={comparison[6]}
                onChange={handleComparisonChange}
                value={selectedComparison}
                styles={selectStyles}
              />
            </S.LookupDropdownWrapper>
            <SearchInput
              wrapperClassName={'lookup'}
              handleActionOnIcon={() => {
                setDoSearch(true);
              }}
              value={selectedInputValue}
              doThis={value => {
                setSelectedInputValue(value || undefined);
              }}
            />
          </S.LookupContentTopBar>
        )}
        <S.LookupContentResponse>
          {!tableData && (
            <S.LookupContentEmpty>Loading...</S.LookupContentEmpty>
          )}
          {tableData && tableData.length > 0 && (
            <>
              <S.LookupContentText>
                Please select an option below by clicking the desired row. Hit{' '}
                <b>Cancel</b> to exit this screen.
              </S.LookupContentText>
              <S.LookupTable>
                <S.LookupHeader>
                  <S.LookupColumn>Id</S.LookupColumn>
                  <S.LookupColumn>Description</S.LookupColumn>
                </S.LookupHeader>
                {tableData.map(item => (
                  <S.LookupRow onClick={() => onSave(item)} key={item.pkey}>
                    <S.LookupColumn>{item.id}</S.LookupColumn>
                    <S.LookupColumn>{item.description}</S.LookupColumn>
                  </S.LookupRow>
                ))}
              </S.LookupTable>
            </>
          )}
        </S.LookupContentResponse>
      </S.ModalLookupContent>
      <S.ModalFooter>
        {tableData && (
          <S.FooterResults>Records found: {tableData.length}</S.FooterResults>
        )}
        <Button default onClick={() => onCancel()}>
          Cancel
        </Button>
      </S.ModalFooter>
    </S.CommentModalWrapper>
  );
};

export default ModalContent;
